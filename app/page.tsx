// @ts-nocheck
"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Apps overlay
    const overlay = document.getElementById("appsOverlay") as HTMLElement | null;
    const appsBtn = document.getElementById("appsBtn");
    const closeApps = document.getElementById("closeApps");
    appsBtn?.addEventListener("click", ()=> overlay && (overlay.style.display="flex"));
    closeApps?.addEventListener("click", ()=> overlay && (overlay.style.display="none"));
    overlay?.addEventListener("click", (e)=>{ if(e.target===overlay) overlay.style.display="none"; });

    // Roster demo
    const data: Record<string,string[]> = {
      general: ["Knicole Burchett","Rachel Bibby","Aimee Mackenzie","Malia Cater","Misty Berkholtz","Moose Johnson","Ryan Johnson"],
      growth: ["Gary Walthers","Gerard Della Porta","T-Roy Ellens","Anna Rakel Ryan","Abdul Rasheed El Amin","Jackie Coppins","Crystal Davis"],
      tech:   ["Feroz Ahmed","Garth Donhauser","Patricia Hudson","Moose Johnson","Ryan Johnson","Malia Cater","Rachel Bibby"]
    };
    function renderRoster(topic:string){
      const el = document.getElementById('roster'); if(!el) return;
      el.innerHTML="";
      data[topic].forEach((name,i)=>{
        const seed = name.split(" ")[0].toLowerCase()+i;
        el.insertAdjacentHTML('beforeend', `<div style="display:flex;align-items:center;justify-
