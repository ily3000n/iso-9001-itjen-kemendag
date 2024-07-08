"use client"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Slider } from "@/components/Slider";

export default function Home() {
  return (
    <Router>
      <main className="font-poppins">
        <div className="w-full text-blue-950">
          <Hero />
          <Slider />
          <Card />
          <Footer />
        </div>
      </main>
    </Router>
  );
}
