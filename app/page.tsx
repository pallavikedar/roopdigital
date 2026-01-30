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
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { databases } from "@/lib/appwrite"
import Image from "next/image"
import logo from "@/public/logo.png"

const DB_ID = "68c59c690038d7f7d1fc"
const COLLECTION_ID = "roops"

export default function DigitalCard() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [dynamicImages, setDynamicImages] = useState<{ [key: string]: string[] }>({})

  /* ================= CATALOG DATA ================= */
  const catalogItems: any = {
    newborn: {
      title: "Baby Casting (0–12 Months)",
      images: [],
      pricing: [
        { title: "Single Pair", desc: "Hands or legs", price: "₹5,000" },
        { title: "Both Pairs", desc: "Hands & legs", price: "₹8,000" },
      ],
    },

    couple: {
      title: "Couple Casting",
      images: [],
      pricing: [
        { title: "Couple Hands", desc: "Both hands casting", price: "₹9,000" },
      ],
    },

    parents: {
      title: "Elderly Casting",
      images: [],
      pricing: [
        { title: "Standard Casting", desc: "Respectfully crafted", price: "₹10,000" },
      ],
    },

    family: {
      title: "Family Casting",
      images: [],
      pricing: [
        { title: "Family Casting", desc: "Depends on members", price: "Starting ₹12,000" },
      ],
    },
  }

  /* ================= FETCH DYNAMIC IMAGES ================= */
  useEffect(() => {
    const fetchImages = async () => {
      const imagesByCategory: { [key: string]: string[] } = {}
      const result = await databases.listDocuments(DB_ID, COLLECTION_ID)

      result.documents.forEach((doc: any) => {
        const key = doc.category?.toLowerCase()
        if (!key) return
        if (!imagesByCategory[key]) imagesByCategory[key] = []
        imagesByCategory[key].push(doc.fileUrl)
      })

      setDynamicImages(imagesByCategory)
    }

    fetchImages()
  }, [])

  const getImagesByCategory = (key: string) => dynamicImages[key] || []

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1F1F1F]">

      {/* ================= HEADER ================= */}
     <header className="px-6 py-12 border-b border-[#E8DFC6] bg-[#FAFAF8]"> {/* Logo + Brand */} <div className="flex items-center justify-center gap-4 mb-4"> <div className="flex items-center justify-center w-20 h-20 rounded-full border border-[#E8DFC6] bg-white shadow-sm"> <Image src={logo} alt="Roops 3D Impressions Logo" width={56} height={56} className="object-contain" priority /> </div> <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide text-[#1F1F1F] leading-tight"> ROOPS 3D<br /> <span className="text-[#C9A24D]">Impressions</span> </h1> </div> {/* Tagline */} <p className="text-center text-sm text-[#8B7A44] tracking-wide"> Fine Art 3D Casting Studio · Nagpur </p> {/* Divider */} <div className="mx-auto my-6 h-px w-24 bg-[#C9A24D]/40" /> {/* Action Buttons */} <div className="flex justify-center gap-3 flex-wrap"> <a href="https://wa.me/918600044482" className="px-6 py-2.5 rounded-full bg-[#1F1F1F] text-white text-sm font-medium hover:bg-[#C9A24D] transition" > WhatsApp </a> <a href="tel:+918600044482" className="px-6 py-2.5 rounded-full border border-[#C9A24D] text-sm text-[#1F1F1F] hover:bg-[#F5E9C8] transition" > Call </a> <a href="https://instagram.com/roops3dimpressions_nagpur" className="px-6 py-2.5 rounded-full border border-[#C9A24D] text-sm text-[#1F1F1F] hover:bg-[#F5E9C8] transition" > Instagram </a> <a href="https://maps.app.goo.gl/EWPxpmS1kW6T26Nd8?g_st=ipc" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full border border-[#C9A24D] text-sm text-[#1F1F1F] hover:bg-[#F5E9C8] transition" > 📍 Location </a> </div> </header>
      {/* ================= MAIN ================= */}
      <main className="max-w-6xl mx-auto px-5 py-14">

        {!selectedCategory ? (
          <>
            <h2 className="text-xl font-medium mb-10 text-center text-[#6F5E2E]">
              Portfolio
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {Object.entries(catalogItems).map(([key, item]: any) => (
                <div
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className="cursor-pointer"
                >
                  <div className="h-80 rounded-2xl overflow-hidden bg-white shadow-md">
                    {getImagesByCategory(key)[0] && (
                      <img
                        src={getImagesByCategory(key)[0]}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* BACK */}
            <div className="flex items-center gap-3 mb-8">
              <Button
                variant="outline"
                size="sm"
                className="border-[#C9A24D]"
                onClick={() => setSelectedCategory(null)}
              >
                <X size={16} />
              </Button>
              <h2 className="text-xl font-medium">
                {catalogItems[selectedCategory].title}
              </h2>
            </div>

            {/* IMAGES */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {getImagesByCategory(selectedCategory).map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className="aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>

            {/* PRICING (MAPPED LIKE IMAGES) */}
            <div className="mt-14">
              <h3 className="text-lg font-medium mb-6 text-[#6F5E2E]">
                Pricing
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {catalogItems[selectedCategory].pricing.map((p: any, i: number) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-[#E8DFC6] bg-white shadow-sm"
                  >
                    <h4 className="font-medium">{p.title}</h4>
                    <p className="text-sm text-[#8B7A44] mb-2">{p.desc}</p>
                    <p className="text-lg font-semibold text-[#C9A24D]">
                      {p.price}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#8B7A44] mt-6 leading-relaxed">
                • Basic frame included<br />
                • Prices may vary by pose & framing<br />
                • Delivery: 2–3 weeks (urgent available)<br />
                • Frames to be collected from studio
              </p>
            </div>
          </>
        )}
      </main>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} className="max-h-[90vh] rounded-xl" />
        </div>
      )}

      <footer className="text-center text-sm text-[#8B7A44] py-6 border-t">
        © Roops 3D Impressions
      </footer>
    </div>
  )
}
