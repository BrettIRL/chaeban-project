import React from "react";
import Flatpickr from "react-flatpickr";
import ThemeSelector from "components/ThemeSelector";
import SubmitButton from "components/SubmitButton";
import { useFormData } from "hooks/useFormData";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { date, number, object, string } from "yup";
import "flatpickr/dist/themes/airbnb.css";

function InputForm() {
  const state = useFormData();

  return (
    <main className="min-h-screen flex items-center py-16">
      <div className="container max-w-screen-md bg-secondary rounded-md p-8">
        <Formik
          initialValues={{
            date: state.data.date,
            message: state.data.message,
            theme: { layout: null, colorway: null },
          }}
          validationSchema={object().shape({
            date: date()
              .required("Please select a date.")
              .typeError("Please use the date picker to select a date."),
            message: string()
              .required("Please enter a message")
              .min(5, "Message must be longer than 4 characters"),
            theme: object().shape({
              layout: number().required(),
              colorway: object().required(),
            }),
          })}
          onSubmit={(values, { setSubmitting }) => {
            const { date, message, theme } = values;
            state.setData({ date, message, theme });
            setSubmitting(false);
          }}
        >
          {({ setFieldValue, values, isSubmitting }) => (
            <Form>
              <h3 className="text-white text-lg font-bold pb-6">
                <div className="inline-flex justify-center items-center bg-accent text-tertiary h-7 w-7 rounded-full mr-4">
                  1
                </div>
                Enter a Date
              </h3>
              <label className="block relative">
                <span className="text-white hidden">Date</span>
                <Flatpickr
                  name="date"
                  className="form-input bg-tertiary text-white rounded-sm w-1/2 mb-6 block"
                  placeholder="Date"
                  value={values.date ?? ""}
                  onChange={(date) => setFieldValue("date", date[0], true)}
                />
                <span className="text-sm text-red-600 absolute bottom-0 right-0">
                  <ErrorMessage name="date" />
                </span>
              </label>
              <h3 className="text-white text-lg font-bold border-t border-tertiary py-6">
                <div className="inline-flex justify-center items-center bg-accent text-tertiary h-7 w-7 rounded-full mr-4">
                  2
                </div>
                Enter a Message
              </h3>
              <label className="block relative">
                <span className="text-white hidden">Message</span>
                <Field
                  as="textarea"
                  name="message"
                  rows="7"
                  spellCheck={true}
                  className="form-textarea resize-none bg-tertiary text-white rounded-sm w-full mb-6 block"
                  placeholder="Message"
                />
                <span className="text-sm text-red-600 absolute bottom-1 right-2">
                  <ErrorMessage name="message" />
                </span>
              </label>
              <h3 className="text-white text-lg font-bold border-t border-tertiary py-6">
                <div className="inline-flex justify-center items-center bg-accent text-tertiary h-7 w-7 rounded-full mr-4">
                  3
                </div>
                Choose a Theme
              </h3>
              <label className="block">
                <span className="text-white hidden">Theme</span>
                <ThemeSelector
                  className="mb-6"
                  onChange={(theme) => {
                    setFieldValue("theme", theme, false);
                  }}
                />
              </label>
              <div className="flex justify-end">
                <SubmitButton isLoading={isSubmitting} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}

export default InputForm;
