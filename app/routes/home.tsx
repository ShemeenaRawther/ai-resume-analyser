import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants";
import ResumeCard from "~/components/ResumeCard";
import { useEffect } from "react";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {

  // Using the usePuterStore hook to access the loading state
 const {auth}= usePuterStore();  
 const navigate = useNavigate();

useEffect(() => {
    if(!auth.isAuthenticated){
        navigate('auth?next=/');
    }
},[auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
      </div>
    </section>
    {resumes?.length > 0 && (
    <div className="resumes-section">
        {
        resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume}/>
        ))
      }
    </div>    
    )}
      
  </main>
}
