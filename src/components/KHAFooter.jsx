import React from 'react'

export default function KKAFooter() {
  return (
    <footer className="bg-[#1a237e] text-white py-8">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <span className="font-bold text-lg">SERVICEBOX</span>
    </div>
    <div>
      <span className="font-bold">Feature</span>
      <ul className="mt-2 space-y-1">
        <li>Blog Service</li>
        <li>Quality</li>
      </ul>
    </div>
    <div>
      <span className="font-bold">Category</span>
      <ul className="mt-2 space-y-1">
        <li>Blog Service</li>
        <li>Quality</li>
      </ul>
    </div>
    <div>
      <span className="font-bold">Content</span>
      <ul className="mt-2 space-y-1">
        <li>Email: xxxxxxx@gmail.com</li>
        <li>Tel: +855 122223344</li>
      </ul>
    </div>
  </div>
</footer>
  )
}
