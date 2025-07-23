import { useState } from "react"
import { Mail, Phone, Linkedin, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BusinessCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  const skills = [
    {
      name: "Assistance, dépannage informatique",
    },
    {
      name: "Création site web",
    },
    {
      name: "Cours d'informatique",
    },
  ]

  const coordinates = [
    {
      icon: Mail,
      content: "kevin.joya@outlook.com",
    },
    {
      icon: Phone,
      content: "06.28.97.91.00",
    },
    {
      icon: Linkedin,
      content: "https://www.linkedin.com/in/kévin-joya-5b6250133",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <Button
          onClick={() => setIsFlipped(!isFlipped)}
          variant="outline"
          size="lg"
          className={`absolute !p-6 -top-19 left-1/2 transform -translate-x-1/2 z-10 !rounded-lg hover:cursor-pointer ${
            isFlipped ? "!bg-[#3F101A] !text-white" : "!bg-white"
          }`}
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Retourner la carte
        </Button>
        <div className="relative w-full h-72 perspective-1000">
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute inset-0 w-full h-full backface-hidden">
              <div className="w-full h-full bg-[#3F101A] rounded-xl shadow-2xl border border-gray-200 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                  <span className="text-5xl font-bold text-[#3F101A]">KJ</span>
                </div>
                <div className="!mt-3">
                  <h1 className="text-2xl font-bold text-white mb-2">Joya Kévin</h1>
                  <p className="text-lg text-white font-medium">Assistance informatique</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
              <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-gray-700 flex flex-col items-center justify-center p-8 text-white">
                <div className="mb-6">
                  <h2 className="text-[#3F101A] scroll-m-20 border-b !pb-2 !text-3xl !font-semibold !tracking-tight !transition-colors !first:mt-0">
                    Experiences :
                  </h2>
                  <ul className="!list-disc [&>li]:!mt-2">
                    {
                      skills.map((skill, index) => (
                        <li
                          className="text-[#3F101A]"
                          key={index}
                        >
                          { skill.name }
                        </li>
                      ))
                    }
                    <li>

                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  {
                    coordinates.map((coordinate, index) => (
                      <div className="flex items-center" key={index}>
                        <coordinate.icon className="w-4 h-4 text-[#3F101A] !mr-2" />
                        {
                          coordinate.icon === Linkedin ? (
                            <a href={coordinate.content} target="_blank" className="!text-[#3F101A]"> Kévin joya </a>
                          ) : (
                            <span className="text-md text-[#3F101A] leading-7 [&:not(:first-child)]:mt-6"> { coordinate.content } </span>
                          )
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
