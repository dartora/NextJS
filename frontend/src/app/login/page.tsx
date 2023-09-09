'use client';
import axios, { AxiosError } from 'axios';
import { Formik, Field, Form, FormikHelpers } from 'formik';

// Define the AxiosErrorResponse interface
interface AxiosErrorResponse {
  message: string;
  response?: {
    status: number;
    data: any;
  };
}
interface Values {
  username: string;
  password: string;
}

export default function LoginForm() {
  return (
    <div className="styles.login_box p-3 w-full max-w-xs m-auto mt-1.5">
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validate={(values) => {
          const errors: Partial<Values> = {};

          if (!values.username) {
            errors.username = 'Username is required.';
          }

          if (!values.password) {
            errors.password = 'Password is required.';
          }

          return errors;
        }}
        
        onSubmit={async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          try {
            const baseUrl = process.env.BACKEND_URL;
            console.log(process.env)
            const response = await axios.post(`${baseUrl}/auth/login`, values);
            alert('Login successful!'); // You can handle success as needed
            setSubmitting(false);
          } catch (error) {
            // Type the error as AxiosError<AxiosErrorResponse>
            const axiosError = error as AxiosError<AxiosErrorResponse>;

            if (axiosError.response) {
              // Handle server response error
              console.log(process)
              alert('Server error: ' + axiosError.message);
              console.error('Server error:', axiosError.response.data);
            } else {
              // Handle network or other errors
              alert('Network error: ' + axiosError.message);
              console.error('Network error:', axiosError.message);
            }

            // Handle login failure here
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <Field
                className={`shadow appearance-none border ${
                  errors.username && touched.username ? 'border-red-500' : ''
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="username"
                name="username"
                type="text"
                placeholder="Username"
              />
              {errors.username && touched.username && (
                <p className="text-red-500 text-xs italic">{errors.username}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                className={`shadow appearance-none border ${
                  errors.password && touched.password ? 'border-red-500' : ''
                } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                name="password"
                type="password"
                placeholder="******"
              />
              {errors.password && touched.password && (
                <p className="text-red-500 text-xs italic">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </Form>
        )}
      </Formik>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Dartora TI. All rights reserved.
      </p>
    </div>
  );
}
