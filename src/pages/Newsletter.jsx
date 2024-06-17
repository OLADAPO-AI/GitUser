import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios'
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const response = await axios.post(newsletterUrl, data)
  console.log(response)

  return redirect('/')
}
function Newsletter() {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form action="" method="POST">
      <div className=" w-auto h-auto flex flex-row">
        <div className="  mx-auto p-6 rounded-xl shadow-2x1 bg-slate-950 ">
          <div className=" mt-[40px] flex flex-row gap-3 items-center">
            <div className=" w-10 h-10 rounded-3xl border-2 border-sky-600 text-gray-200 font-[700] text-[16px] leading-[19.2px] text-center items-center flex flex-row justify-center">
              1
            </div>
            <h3 className=" font-[700] text-[18px] text-gray-200 leading-[21.6px]">
              Our Newsletter
            </h3>
          </div>

          <div className=" flex flex-row gap-3 mt-4">
            <div className=" flex flex-col w-[227px] h-[60px] gap-2">
              <label
                htmlFor="name"
                className=" font-[400] text-[14px] leading-[16.8px]"
              >
                First Name
              </label>
              <input
                type="text"
                id="name"
                required
                name="name"
                placeholder="first name"
                className=" p-2 font-[400] text-[14px] leading-[16.8px] rounded border-2"
              />
            </div>

            <div className=" flex flex-col  w-[227px] h-[60px] gap-2">
              <label
                htmlFor="lastName"
                className=" font-[400] text-[14px] leading-[16.8px]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                required
                name="lastName"
                placeholder="last name"
                className="  p-2 font-[400] text-[14px] leading-[16.8px] rounded border-2"
              />
            </div>
          </div>

          <div className="mt-4 pb-[30px]">
            <div className=" flex flex-col w-[370px] h-[60px] gap-2">
              <label
                htmlFor="email"
                className=" font-[400] text-[14px] leading-[16.8px]"
              >
                E-mail
              </label>
              <input
                type="text"
                name="email"
                required
                id="email"
                defaultValue="test@test.com"
                placeholder="enter your email"
                className="  p-2 font-[400] text-[14px] leading-[16.8px] rounded border-2"
              />
            </div>
          </div>
          <div className="mx-auto mt-[30px]">
            <button
              type="submit"
              disabled={isSubmitting}
              className=" w-[483px] h-[52px] bg-blue-500 hover:bg-white text-white  rounded-md hover:text-blue-500 transition ease-in duration-300 "
            >
              {isSubmitting ? 'submitting' : 'submit'}
            </button>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default Newsletter
