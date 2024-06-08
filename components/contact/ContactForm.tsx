"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { VscSend } from "react-icons/vsc";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      question: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string().required("Please fill in the subject"),
      question: Yup.string().required("Please fill in your question"),
    }),
    onSubmit: (values, { resetForm }) => {
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=vegan.vibes@gmail.com&su=${encodeURIComponent(
        values.subject
      )}&body=${encodeURIComponent(values.question)}`;

      window.open(gmailLink, "_blank");

      resetForm();
    },
  });

  return (
    <div className="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
      <h2 className="mb-8 text-2xl text-greenColor font-bold">Get in touch</h2>
      <p className="mt-2 mb-4 font-sans text-sm tracking-normal">
        ask us a question.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="md:col-gap-4 mb-5 grid md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <input
              className={`w-full border-b py-3 text-sm outline-none focus:border-b-2 ${
                formik.touched.name && formik.errors.name
                  ? "border-red-600"
                  : "border-black"
              }`}
              type="text"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-600 text-sm mt-1">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
          <div className="col-span-1">
            <input
              className={`w-full border-b py-3 text-sm outline-none focus:border-b-2 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-600"
                  : "border-black"
              }`}
              type="email"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-sm mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        </div>
        <div className="mb-5">
          <input
            className={`w-full border-b py-3 text-sm outline-none focus:border-b-2 ${
              formik.touched.subject && formik.errors.subject
                ? "border-red-600"
                : "border-black"
            }`}
            type="text"
            placeholder="Subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.subject}
            </div>
          ) : null}
        </div>
        <div className="mb-10">
          <textarea
            className={`w-full resize-y whitespace-pre-wrap border-b py-3 text-sm outline-none focus:border-b-2 ${
              formik.touched.question && formik.errors.question
                ? "border-red-600"
                : "border-black"
            }`}
            placeholder="Question"
            name="question"
            value={formik.values.question}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          ></textarea>
          {formik.touched.question && formik.errors.question ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.question}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="group flex cursor-pointer items-center rounded-xl bg-greenColor px-8 py-4 text-center font-semibold leading-tight text-white"
        >
          Send
          <VscSend className="w-8 h-8 text-white object-cover group-hover:ml-8 ml-4 transition-all" />
        </button>
      </form>
    </div>
  );
}
