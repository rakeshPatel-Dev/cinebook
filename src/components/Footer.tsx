import React from 'react'
import { toast } from 'react-toastify'

const Footer = () => {

  const showToast = (target:string) => {
    toast.error(`${target} is currently being worked on.`);
  }


  return (
    <div>
        {/* Footer */}
  <footer className="w-full dark:bg-[#121212] border-t border-gray-200/10 dark:border-white/10 mt-auto">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} CineBook. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a
        onClick={() => {
          showToast("Support")
        }}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#ec1337]"
          href="#"
        >
          Support
        </a>
        <a
        onClick={() => {
          showToast("FAQs")
        }}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#ec1337]"
          href="#"
        >
          FAQs
        </a>
        <a
        onClick={() => {
          showToast("Terms of Service")
        }}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#ec1337]"
          href="#"
        >
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
