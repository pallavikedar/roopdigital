
// "use client"

// import { useState } from "react"
// import { storage, databases } from "@/lib/appwrite"
// import { ID } from "appwrite"
// import { Button } from "@/components/ui/button"

// const DB_ID = "68c59c690038d7f7d1fc"
// const COLLECTION_ID = "roops" // rename it instead of categories
// const BUCKET_ID = "68d766ca001598d15983"

// export default function AdminDashboard() {
//   const [category, setCategory] = useState("newborn casting")
//   const [file, setFile] = useState<File | null>(null)
//   const [message, setMessage] = useState("")

//   const handleUpload = async () => {
//     if (!file) return

//     try {
//       // 1. Upload file
//       const uploaded = await storage.createFile(BUCKET_ID, ID.unique(), file)

//       // 2. Save document with static category
//       await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
//         category,
//         fileId: uploaded.$id,
//         fileUrl: `https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=68c5199f0022f542138f`,
//       })

//       setMessage("✅ Image uploaded successfully!")
//     } catch (err: any) {
//       setMessage("❌ Error: " + err.message)
//     }
//   }

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Upload Casting Image</h2>

//       <select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         className="border p-2 w-full mb-2"
//       >
//         <option value="newborn">Newborn Casting</option>
//         <option value="couple">Couple Casting</option>
//         <option value="parents">Parents Casting</option>
//         <option value="family">Family Casting</option>
//       </select>

//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files?.[0] || null)}
//         className="mb-2"
//       />

//       <Button onClick={handleUpload} className="w-full">Upload</Button>

//       {message && <p className="mt-2 text-sm">{message}</p>}
//     </div>
//   )
// }




"use client"

import { useState, useEffect } from "react"
import { storage, databases } from "@/lib/appwrite"
import { ID } from "appwrite"
import { Button } from "@/components/ui/button"

const DB_ID = "68c59c690038d7f7d1fc"
const COLLECTION_ID = "roops"
const BUCKET_ID = "68d766ca001598d15983"

export default function AdminDashboard() {
  const [category, setCategory] = useState("newborn")
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState("")
  const [images, setImages] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editCategory, setEditCategory] = useState("")

  // Fetch all images
  const fetchImages = async () => {
    setLoading(true)
    try {
      const res = await databases.listDocuments(DB_ID, COLLECTION_ID)
      setImages(res.documents)
    } catch (err: any) {
      setMessage("❌ Error fetching images: " + err.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchImages()
  }, [])

  // Upload new image
  const handleUpload = async () => {
    if (!file) return
    try {
      const uploaded = await storage.createFile(BUCKET_ID, ID.unique(), file)
      await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
        category,
        fileId: uploaded.$id,
        fileUrl: `https://fra.cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=68c5199f0022f542138f`,
      })
      setMessage("✅ Image uploaded successfully!")
      setFile(null)
      fetchImages()
    } catch (err: any) {
      setMessage("❌ Error: " + err.message)
    }
  }

  // Delete image
  const handleDelete = async (docId: string, fileId: string) => {
    try {
      await databases.deleteDocument(DB_ID, COLLECTION_ID, docId)
      await storage.deleteFile(BUCKET_ID, fileId)
      setMessage("✅ Image deleted successfully!")
      fetchImages()
    } catch (err: any) {
      setMessage("❌ Error deleting: " + err.message)
    }
  }

  // Start editing
  const startEdit = (img: any) => {
    setEditingId(img.$id)
    setEditCategory(img.category)
  }

  // Save edited category or image
  const handleSaveEdit = async (img: any) => {
    try {
      let updatedFileId = img.fileId
      let updatedFileUrl = img.fileUrl

      // If new file selected, upload it
      if (file) {
        // Delete old file
        await storage.deleteFile(BUCKET_ID, img.fileId)
        const uploaded = await storage.createFile(BUCKET_ID, ID.unique(), file)
        updatedFileId = uploaded.$id
        updatedFileUrl = `https://fra.cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=68c5199f0022f542138f`
        setFile(null)
      }

      // Update document
      await databases.updateDocument(DB_ID, COLLECTION_ID, img.$id, {
        category: editCategory,
        fileId: updatedFileId,
        fileUrl: updatedFileUrl,
      })

      setMessage("✅ Image updated successfully!")
      setEditingId(null)
      fetchImages()
    } catch (err: any) {
      setMessage("❌ Error updating: " + err.message)
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload Casting Image</h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full mb-2"
      >
        <option value="newborn">Newborn Casting</option>
        <option value="couple">Couple Casting</option>
        <option value="parents">Parents Casting</option>
        <option value="family">Family Casting</option>
      </select>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-2"
      />

      <Button onClick={handleUpload} className="w-full mb-4">Upload</Button>
      {message && <p className="mt-2 text-sm">{message}</p>}

      <h2 className="text-xl font-bold mt-6 mb-4">All Images</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.$id} className="border p-2 rounded-lg">
              <img src={img.fileUrl} alt={img.category} className="w-full h-40 object-cover mb-2 rounded" />
              
              {editingId === img.$id ? (
                <>
                  <select
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                    className="border p-1 mb-2 w-full text-sm"
                  >
                    <option value="newborn">Newborn Casting</option>
                    <option value="couple">Couple Casting</option>
                    <option value="parents">Parents Casting</option>
                    <option value="family">Family Casting</option>
                  </select>

                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="border p-1 mb-2 w-full text-sm"
                  />

                  <Button onClick={() => handleSaveEdit(img)} className="w-full mb-1">
                    Save
                  </Button>
                  <Button onClick={() => setEditingId(null)} className="w-full bg-gray-300 text-black">
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <p className="text-sm font-medium mb-2">{img.category}</p>
                  <Button onClick={() => startEdit(img)} className="w-full mb-1">
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(img.$id, img.fileId)}
                    className="w-full bg-red-500 hover:bg-red-600 mt-1"
                  >
                    Delete
                  </Button>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
