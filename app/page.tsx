// "use client"

// import { useState,useEffect } from "react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Phone, Instagram, MapPin, Heart, MessageCircle, Mail, Facebook, X } from "lucide-react"
// import newBorn from "@/public/new born.jpg"
// import { storage, databases } from "@/lib/appwrite"
// import { ID } from "appwrite"

// const DB_ID = "68c59c690038d7f7d1fc"
// const COLLECTION_ID = "roops"
// export default function DigitalCard() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
//   const [selectedImage, setSelectedImage] = useState<string | null>(null)
//   const [dynamicImages, setDynamicImages] = useState<{ [key: string]: string[] }>({})

//   const catalogItems = {
//     newborn: {
//       title: "Newborn Baby Casting",
//       description: "Capture those precious tiny hands and feet forever",
//       images: [
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0028.jpg-YmKzPEpI1wZi8KL43iudmMCPqiLlQw.jpeg",
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0022.jpg-CMWWcyfTVXcP7jcN6Ugv9Li5MyqEog.jpeg",
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0024.jpg-KhCCNf8rSo7OU2CyCpbRUCpBXAaymg.jpeg",
//       ],
//       price: "₹5000/- (single pair hands or feet)",
//       profile: (typeof newBorn === "string" ? newBorn : newBorn.src),
//     },
//     couple: {
//       title: "Couple Casting",
//       description: "Beautiful hand casting for couples and partners",
//       images: [
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0017.jpg-fxXxPnuGupnhTYLDfIm95ZRX8BDRNU.jpeg",
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0027.jpg-VftXifAKMMgDYoyXOI7sKiCXc9oE3O.jpeg",
//       ],
//       price: "₹9000/- (both pair)",
//       profile:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0017.jpg-fxXxPnuGupnhTYLDfIm95ZRX8BDRNU.jpeg",
//     },
//     parents: {
//       title: "Parents Casting",
//       description: "Preserve the loving bond between parent and child",
//       images: [
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0023.jpg-Qfa6wmTXQQUaMO1HXCj8pwsoKBApXU.jpeg",
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0026.jpg-soIMuorX7Inybf2jKybsZwLVmSGcpa.jpeg",
//       ],
//       price: "₹10000/- (elderly casting)",
//       profile:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0023.jpg-Qfa6wmTXQQUaMO1HXCj8pwsoKBApXU.jpeg",
//     },
//     family: {
//       title: "Family Casting",
//       description: "Complete family hand impressions in beautiful displays",
//       images: [
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0029.jpg-s0q229EDDp6LUP5FiT6hEPreiIMenH.jpeg",
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0020.jpg-NuKBV7mOyuloWrFsdGApcBIst1IQha.jpeg",
//       ],
//       price: "₹12000/- onwards (depends on family size)",
//       profile:
//         "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0029.jpg-s0q229EDDp6LUP5FiT6hEPreiIMenH.jpeg",
//     },
//   }
//   useEffect(() => {
//     const fetchImages = async () => {
//       const imagesByCategory: { [key: string]: string[] } = {}
//       for (const category of Object.keys(catalogItems)) {
//         try {
//           const result = await databases.listDocuments(DB_ID, COLLECTION_ID, [
//             { key: "category", value: category }
//           ])
//           imagesByCategory[category] = result.documents.map(doc => doc.fileUrl)
//         } catch (err) {
//           console.error("Error fetching images for", category, err)
//           imagesByCategory[category] = []
//         }
//       }
//       setDynamicImages(imagesByCategory)
//     }

//     fetchImages()
//   }, [])

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
//       <header className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 text-center">
//         <div className="max-w-4xl mx-auto">
//           {/* Logo and Business Name */}
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
//               <Heart className="w-8 h-8 text-orange-500" />
//             </div>
//             <div className="text-left">
//               <h1 className="text-4xl font-bold tracking-wide">ROOPS 3D</h1>
//               <p className="text-2xl font-light text-amber-100">IMPRESSIONS</p>
//             </div>
//           </div>
//           <p className="text-amber-100 text-lg font-medium">Nagpur's Premier 3D Casting Studio</p>
//           <p className="text-amber-200 text-sm mt-1">Preserving Your Precious Moments Forever</p>
//         </div>
//       </header>

//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-4xl mx-auto px-4 py-3">
//           <div className="flex flex-wrap justify-center gap-2 md:gap-4">
//             {/* WhatsApp */}
//             <a
//               href="https://wa.me/918600044482"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
//             >
//               <MessageCircle className="w-4 h-4" />
//               WhatsApp
//             </a>

//             {/* Call */}
//             <a
//               href="tel:+918600044482"
//               className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
//             >
//               <Phone className="w-4 h-4" />
//               Call
//             </a>

//             {/* Email */}
//             <a
//               href="mailto:roops3dimpressions@gmail.com"
//               className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
//             >
//               <Mail className="w-4 h-4" />
//               Email
//             </a>

//             {/* Instagram */}
//             <a
//               href="https://instagram.com/roops3dimpressions_nagpur"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
//             >
//               <Instagram className="w-4 h-4" />
//               Instagram
//             </a>

//             {/* Facebook */}
//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
//             >
//               <Facebook className="w-4 h-4" />
//               Facebook
//             </a>

//             {/* Location */}
//             <div className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium">
//               <MapPin className="w-4 h-4" />
//               Nagpur
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//        <main className="max-w-6xl mx-auto p-4">
//         {!selectedCategory ? (
//           <div>
//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Catalog</h2>
//             <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
//               {Object.entries(catalogItems).map(([key, item]) => (
//                 <Card
//                   key={key}
//                   className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
//                   onClick={() => setSelectedCategory(key)}
//                 >
//                   <div className="aspect-square relative">
//                     <img
//                       src={dynamicImages[key]?.[0] || "/placeholder.svg"}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0  flex items-end">
//                       <div className="p-4 text-white w-full">
//                         <h3 className="font-bold text-lg mb-1">{item.title}</h3>
//                         <p className="text-sm opacity-90">{item.price}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div>
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-3xl font-bold text-gray-800">{catalogItems[selectedCategory].title}</h2>
//               <Button variant="outline" onClick={() => setSelectedCategory(null)} className="flex items-center gap-2">
//                 <X className="w-4 h-4" /> Back to Catalog
//               </Button>
//             </div>

//             <Card className="mb-6">
//               <div className="p-6">
//                 <p className="text-gray-600 mb-4 text-lg">{catalogItems[selectedCategory].title}</p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//                   {(dynamicImages[selectedCategory] || []).map((image, index) => (
//                     <div
//                       key={index}
//                       className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
//                       onClick={() => setSelectedImage(image)}
//                     >
//                       <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
//                   <h3 className="font-semibold text-amber-800 mb-2">Pricing</h3>
//                   <p className="text-amber-700 text-lg">{catalogItems[selectedCategory].price}</p>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         )}
//       </main>

//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl max-h-full">
//             <Button
//               variant="outline"
//               size="sm"
//               className="absolute top-4 right-4 z-10 bg-white"
//               onClick={() => setSelectedImage(null)}
//             >
//               <X className="w-4 h-4" />
//             </Button>
//             <img
//               src={selectedImage || "/placeholder.svg"}
//               alt="Full size view"
//               className="max-w-full max-h-full object-contain rounded-lg"
//             />
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center py-4 mt-8">
//         <p>© 2025 Roops 3D Impressions. All rights reserved.</p>
//       </footer>
//     </div>
//   )
// }










"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Instagram, MapPin, Heart, MessageCircle, Mail, Facebook, X } from "lucide-react"
import newBorn from "@/public/new born.jpg"
import { databases } from "@/lib/appwrite"

const DB_ID = "68c59c690038d7f7d1fc"
const COLLECTION_ID = "roops"

export default function DigitalCard() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [dynamicImages, setDynamicImages] = useState<{ [key: string]: string[] }>({})

  // Static catalog
  const catalogItems = {
    newborn: {
      title: "Newborn Baby Casting",
      description: "Capture those precious tiny hands and feet forever",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0028.jpg-YmKzPEpI1wZi8KL43iudmMCPqiLlQw.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0022.jpg-CMWWcyfTVXcP7jcN6Ugv9Li5MyqEog.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0024.jpg-KhCCNf8rSo7OU2CyCpbRUCpBXAaymg.jpeg",
      ],
      price: "₹5000/- (single pair hands or feet)",
      profile: (typeof newBorn === "string" ? newBorn : newBorn.src),
    },
    couple: {
      title: "Couple Casting",
      description: "Beautiful hand casting for couples and partners",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0017.jpg-fxXxPnuGupnhTYLDfIm95ZRX8BDRNU.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0027.jpg-VftXifAKMMgDYoyXOI7sKiCXc9oE3O.jpeg",
      ],
      price: "₹9000/- (both pair)",
      profile:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0017.jpg-fxXxPnuGupnhTYLDfIm95ZRX8BDRNU.jpeg",
    },
    parents: {
      title: "Parents Casting",
      description: "Preserve the loving bond between parent and child",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0023.jpg-Qfa6wmTXQQUaMO1HXCj8pwsoKBApXU.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0026.jpg-soIMuorX7Inybf2jKybsZwLVmSGcpa.jpeg",
      ],
      price: "₹10000/- (elderly casting)",
      profile:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0023.jpg-Qfa6wmTXQQUaMO1HXCj8pwsoKBApXU.jpeg",
    },
    family: {
      title: "Family Casting",
      description: "Complete family hand impressions in beautiful displays",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0029.jpg-s0q229EDDp6LUP5FiT6hEPreiIMenH.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0020.jpg-NuKBV7mOyuloWrFsdGApcBIst1IQha.jpeg",
      ],
      price: "₹12000/- onwards (depends on family size)",
      profile:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250918-WA0029.jpg-s0q229EDDp6LUP5FiT6hEPreiIMenH.jpeg",
    },
  }

  // Fetch dynamic images from Appwrite
  useEffect(() => {
    const fetchImages = async () => {
      const imagesByCategory: { [key: string]: string[] } = {}

      try {
        const result = await databases.listDocuments(DB_ID, COLLECTION_ID)
        result.documents.forEach(doc => {
          const categoryKey = doc.category.toLowerCase()
          if (!imagesByCategory[categoryKey]) imagesByCategory[categoryKey] = []
          imagesByCategory[categoryKey].push(doc.fileUrl)
        })
        setDynamicImages(imagesByCategory)
      } catch (err) {
        console.error("Error fetching dynamic images:", err)
      }
    }

    fetchImages()
  }, [])

  // Combine static + dynamic images for a category
  const getImagesByCategory = (categoryKey: string) => {
    const staticImages = catalogItems[categoryKey]?.images || []
    const matchedDynamicImages: string[] = []

    Object.entries(dynamicImages).forEach(([dynamicCategory, images]) => {
      if (
        dynamicCategory.toLowerCase().includes(categoryKey.toLowerCase()) ||
        categoryKey.toLowerCase().includes(dynamicCategory.toLowerCase())
      ) {
        matchedDynamicImages.push(...images)
      }
    })

    return [...staticImages, ...matchedDynamicImages]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-orange-500" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-wide">ROOPS 3D</h1>
              <p className="text-2xl font-light text-amber-100">IMPRESSIONS</p>
            </div>
          </div>
          <p className="text-amber-100 text-lg font-medium">Nagpur's Premier 3D Casting Studio</p>
          <p className="text-amber-200 text-sm mt-1">Preserving Your Precious Moments Forever</p>
        </div>
      </header>

      {/* Contact Links */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <a href="https://wa.me/918600044482" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="tel:+918600044482" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
              <Phone className="w-4 h-4" /> Call
            </a>
            <a href="mailto:roops3dimpressions@gmail.com" className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="https://instagram.com/roops3dimpressions_nagpur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <div className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              <MapPin className="w-4 h-4" /> Nagpur
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4">
        {!selectedCategory ? (
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Catalog</h2>
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {Object.entries(catalogItems).map(([key, item]) => (
                <Card key={key} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden" onClick={() => setSelectedCategory(key)}>
                  <div className="aspect-square relative">
                    <img src={getImagesByCategory(key)[0] || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-end">
                      <div className="p-4 text-white w-full">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.price}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800">{catalogItems[selectedCategory].title}</h2>
              <Button variant="outline" onClick={() => setSelectedCategory(null)} className="flex items-center gap-2">
                <X className="w-4 h-4" /> Back to Catalog
              </Button>
            </div>

            <Card className="mb-6">
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-lg">{catalogItems[selectedCategory].title}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {getImagesByCategory(selectedCategory).map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => setSelectedImage(image)}>
                      <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">Pricing</h3>
                  <p className="text-amber-700 text-lg">{catalogItems[selectedCategory].price}</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <Button variant="outline" size="sm" className="absolute top-4 right-4 z-10 bg-white" onClick={() => setSelectedImage(null)}>
              <X className="w-4 h-4" />
            </Button>
            <img src={selectedImage || "/placeholder.svg"} alt="Full size view" className="max-w-full max-h-full object-contain rounded-lg" />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>© 2025 Roops 3D Impressions. All rights reserved.</p>
      </footer>
    </div>
  )
}
