import React, { useState } from 'react'
import { useProduct } from '../hooks/useproduct.js'

const ProductCreate = () => {
  const { handlecreateproduct } = useProduct()

  const [form, setForm] = useState({
    title: '',
    description: '',
    currency: 'USD',
    price: '',
    image: null,
  })
  const [preview, setPreview] = useState(null)
  const [dragging, setDragging] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (file) => {
    if (!file) return
    setForm((prev) => ({ ...prev, images: file }))
    setPreview(URL.createObjectURL(file))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    handleImageChange(file)
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("discription", form.description);
    formData.append("priceAmount", form.price);
    formData.append("priceCurrency", form.currency);

    if (form.image) {
      formData.append("image", form.image);
    }

    handlecreateproduct(formData);
  };


  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create Product</h1>
          <p className="mt-1 text-sm text-gray-500">
            Fill in the details below to add a new product to your store.
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-6"
        >

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Product Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Classic White Sneakers"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              placeholder="Describe your product..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Product Image
            </label>

            {preview ? (
              <div className="relative rounded-xl overflow-hidden border border-gray-200 h-52">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreview(null)
                    setForm((p) => ({ ...p, image: null }))
                  }}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow text-gray-500 hover:text-red-500 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <label
                onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                className={`flex flex-col items-center justify-center w-full h-44 border-2 border-dashed rounded-xl cursor-pointer transition ${dragging
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-indigo-400'
                  }`}
              >
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e.target.files[0])}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-indigo-600">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP up to 10MB</p>
              </label>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Price <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">

              {/* Currency dropdown */}
              <div className="relative">
                <select
                  name="currency"
                  value={form.currency}
                  onChange={handleChange}
                  className="h-full appearance-none rounded-lg border border-gray-300 bg-gray-50 pl-3 pr-8 py-2.5 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition cursor-pointer"
                >
                  <option value="USD">🇺🇸 USD — $</option>
                  <option value="EUR">🇪🇺 EUR — €</option>
                  <option value="GBP">🇬🇧 GBP — £</option>
                  <option value="INR">🇮🇳 INR — ₹</option>
                  <option value="AED">🇦🇪 AED — د.إ</option>
                  <option value="JPY">🇯🇵 JPY — ¥</option>
                  <option value="CAD">🇨🇦 CAD — CA$</option>
                  <option value="AUD">🇦🇺 AUD — A$</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              {/* Amount input with dynamic symbol */}
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-sm font-semibold select-none">
                  {{ USD: '$', EUR: '€', GBP: '£', INR: '₹', AED: 'د.إ', JPY: '¥', CAD: 'CA$', AUD: 'A$' }[form.currency]}
                </span>
                <input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  step="0.01"
                  required
                  value={form.price}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-gray-100 pt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            >
              Create Product
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ProductCreate
