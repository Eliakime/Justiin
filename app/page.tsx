"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Hammer,
  Star,
  Quote,
  Mail,
  Phone,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function JustinArchitectSite() {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      name: "EmergIne – Porto-Novo",
      image: "/images/maison-benin-1.png",
      type: "Villa moderne",
      duration: "5 mois",
      materials: "Béton armé, carreaux locaux, toiture métallique",
      description:
        "Villa familiale moderne intégrant l'architecture traditionnelle béninoise avec des matériaux locaux",
    },
    {
      name: "Résidence AKPAKPA – Cotonou",
      image: "/images/chantier-benin-2.png",
      type: "Immeuble résidentiel",
      duration: "8 mois",
      materials: "Briques locales, béton, toiture en tôles",
      description: "Complexe résidentiel moderne respectueux de l'environnement urbain de Cotonou",
    },
    {
      name: "Maison Familiale – Bohicon",
      image: "/images/villa-moderne-benin.png",
      type: "Habitation familiale",
      duration: "4 mois",
      materials: "Matériaux écologiques locaux, bois tropical",
      description: "Construction traditionnelle modernisée pour une famille de Bohicon",
    },
  ]

  const testimonials = [
    {
      text: "Justin a conçu notre maison avec beaucoup d'écoute. Très satisfait du résultat.",
      author: "K.A., Savalou",
      rating: 5,
    },
    {
      text: "Un jeune professionnel qui comprend nos besoins. Travail de qualité et dans les délais.",
      author: "M.D., Porto-Novo",
      rating: 5,
    },
    {
      text: "Excellent architecte ! Il a su allier modernité et tradition béninoise dans notre projet.",
      author: "F.T., Cotonou",
      rating: 5,
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
            >
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                  Architecte & Ingénieur Béninois
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Justin
                  <span className="block text-amber-600">Architecte</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Architecte et constructeur béninois de 18 ans, je conçois et réalise des espaces modernes qui
                  célèbrent l'héritage architectural béninois tout en embrassant l'innovation et les matériaux locaux.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Découvrir mes projets
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  Me contacter
                </Button>
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <Image
                  src="/images/justin-portrait.png"
                  alt="Portrait de Justin - Architecte béninois"
                  width={400}
                  height={500}
                  className="relative z-10 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Une vision moderne, des racines profondes</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              À seulement 18 ans, je porte en moi la passion de l'architecture et l'amour de mon pays, le Bénin. Chaque
              projet est une opportunité de créer des espaces qui racontent notre histoire tout en préparant notre
              avenir. Mon approche combine techniques modernes et matériaux locaux pour des constructions durables et
              authentiques.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Hammer className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold">Expertise Locale</h3>
                <p className="text-gray-600">Connaissance approfondie des matériaux et techniques béninoises</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-gray-600">Intégration de solutions modernes et durables</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold">Ancrage Territorial</h3>
                <p className="text-gray-600">Projets adaptés au climat et à la culture béninoise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Réalisations Locales */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Nos Réalisations Locales</h2>
            <p className="text-lg text-gray-600">
              Découvrez nos projets qui transforment le paysage architectural béninois
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">{projects[currentProject].name}</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Hammer className="w-5 h-5" />
                      <span>{projects[currentProject].type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{projects[currentProject].duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{projects[currentProject].materials}</span>
                    </div>
                  </div>
                  <p className="text-lg opacity-90">{projects[currentProject].description}</p>
                </div>
              </div>
            </div>

            <Button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
              size="icon"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
              size="icon"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            <div className="flex justify-center mt-8 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentProject ? "bg-amber-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Ce que disent nos clients</h2>
            <p className="text-lg text-gray-600">La satisfaction de nos clients est notre plus belle récompense</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-12 text-center">
                <Quote className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <cite className="text-lg text-amber-600 font-semibold">
                  — {testimonials[currentTestimonial].author}
                </cite>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-amber-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Cpath d%3D%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Portfolio Créatif</h2>
            <p className="text-lg text-gray-300">Du croquis à la réalité : découvrez mon processus créatif</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">✏️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Croquis Initial</h3>
                <p className="text-gray-300">Première esquisse des idées et concepts architecturaux</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Modélisation 3D</h3>
                <p className="text-gray-300">Visualisation détaillée et technique du projet</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Réalisation</h3>
                <p className="text-gray-300">Construction finale et livraison du projet</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Construisons ensemble votre projet</h2>
            <p className="text-lg text-gray-600">
              Prêt à donner vie à vos idées ? Contactez-moi pour discuter de votre projet architectural.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-2 border-amber-100 hover:border-amber-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">justin@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-100 hover:border-amber-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Téléphone</h3>
                  <p className="text-gray-600">+229 47 92 11 35</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-100 hover:border-amber-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Localisation</h3>
                  <p className="text-gray-600">Cotonou, Bénin</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Demander un devis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
              >
                Voir plus de projets
              </Button>
            </div>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
              onClick={() => window.open("https://wa.me/22947921135", "_blank")}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Justin Architecte</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Architecte et constructeur béninois passionné, créant des espaces modernes qui célèbrent notre héritage
              culturel.
            </p>
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
            <div className="border-t border-gray-800 pt-6 space-y-2">
              <p className="text-gray-400">
                &copy; 2024 Justin Architecte. Tous droits réservés. Fait avec ❤️ au Bénin.
              </p>
              <div className="text-sm text-gray-500">
                <p>
                  Réalisé par <span className="text-amber-400 font-semibold">Eliakim Clauvis</span>
                </p>
                <p>
                  GitHub: <span className="text-amber-400">Eliakime</span> | 📞 +229 97 06 76 15 | ✉️
                  clauviseliakim@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
