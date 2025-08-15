import React from 'react'

const clamp = (min, v, max) => Math.max(min, Math.min(max, v))

/**
 * Each template:
 * id, title, tags[]
 * fields: [{name,label,type,placeholder,default}]
 * preview: () => JSX (small preview)
 * render: ({width,height,data}) => JSX (full render)
 */

function GradientBG({ from='#fde68a', via=null, to='#fca5a5' }){
  const cls = via ? `bg-gradient-to-br from-[${from}] via-[${via}] to-[${to}]` : `bg-gradient-to-br from-[${from}] to-[${to}]`
  return <div className="absolute inset-0">{/* Tailwind won't parse arbitrary color like this; fallback with style */}
    <div className="absolute inset-0" style={{
      background: via
        ? `linear-gradient(135deg, ${from}, ${via}, ${to})`
        : `linear-gradient(135deg, ${from}, ${to})`
    }}/>
    <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(#000 1px, transparent 1px)', backgroundSize:'24px 24px'}}/>
  </div>
}

const DiwaliTemplate = {
  id: 'diwali_blossom',
  title: 'Diwali Blossom',
  tags: ['Festival','Warm','Decorative'],
  fields: [
    { name:'headline', label:'Headline', placeholder:'Happy Diwali', default:'Happy Diwali' },
    { name:'name', label:'Name / From', placeholder:'From Awadh & Family', default:'From Awadh & Family' },
    { name:'message', label:'Message', type:'textarea', placeholder:'Wishing you joy, prosperity and light!', default:'Wishing you joy, prosperity and light!' },
    { name:'date', label:'Date (optional)', placeholder:'31 Oct 2025' }
  ],
  preview(){
    return (
      <div className="relative w-[540px] h-[675px] rounded-3xl overflow-hidden">
        <GradientBG from="#ffecd2" to="#fcb69f" />
        <div className="absolute inset-0 p-16 text-center text-slate-800">
          <div className="text-7xl">🪔</div>
          <div className="mt-6 text-5xl font-extrabold tracking-tight">Happy Diwali</div>
          <div className="mt-3 text-base opacity-80">From Awadh & Family</div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-white/70 backdrop-blur rounded-t-[48px] grid place-items-center">
          <div className="text-xs px-6 text-center">Wishing you joy, prosperity and light!</div>
        </div>
      </div>
    )
  },
  render({ width, height, data }){
    return (
      <div className="w-full h-full relative">
        <GradientBG from="#ffecd2" to="#fcb69f" />
        <div className="absolute inset-0 p-[6%] text-center text-slate-800">
          <div style={{fontSize: clamp(40, width*0.07, 120)}}>🪔</div>
          <div className="mt-4 font-extrabold tracking-tight" style={{fontSize: clamp(36, width*0.08, 140)}}>{data.headline || 'Happy Diwali'}</div>
          {data.date && <div className="mt-2 text-slate-700/70" style={{fontSize: clamp(16, width*0.025, 32)}}>{data.date}</div>}
          <div className="mt-4" style={{fontSize: clamp(14, width*0.022, 28)}}>{data.name}</div>
        </div>
        <div className="absolute bottom-0 inset-x-0 p-[5%]">
          <div className="mx-auto max-w-[900px] bg-white/80 backdrop-blur rounded-3xl p-[3%] text-slate-700" style={{fontSize: clamp(14, width*0.022, 28)}}>
            {data.message}
          </div>
        </div>
      </div>
    )
  }
}

const BirthdayTemplate = {
  id: 'birthday_confetti',
  title: 'Birthday Confetti',
  tags: ['Birthday','Playful','Bold'],
  fields: [
    { name:'headline', label:'Headline', placeholder:'Happy Birthday!', default:'Happy Birthday!' },
    { name:'person', label:'Person Name', placeholder:'Priya' , default:'Priya' },
    { name:'age', label:'Age', placeholder:'21' },
    { name:'from', label:'From', placeholder:'— From Awadh', default:'— From Awadh' },
    { name:'message', label:'Message', type:'textarea', placeholder:'Have an amazing day!' , default:'Have an amazing day!' },
  ],
  preview(){
    return (
      <div className="relative w-[540px] h-[675px] rounded-3xl overflow-hidden">
        <GradientBG from="#a1c4fd" to="#c2e9fb" />
        <div className="absolute inset-0 p-10 text-center">
          <div className="text-6xl">🎂🎉</div>
          <div className="mt-4 text-5xl font-extrabold">Happy Birthday!</div>
          <div className="mt-2 text-base">Priya turns 21</div>
        </div>
      </div>
    )
  },
  render({ width, height, data }){
    return (
      <div className="w-full h-full relative">
        <GradientBG from="#a1c4fd" to="#c2e9fb" />
        <div className="absolute inset-0 p-[6%] text-center text-slate-900">
          <div style={{fontSize: clamp(40, width*0.07, 120)}}>🎂🎉</div>
          <div className="mt-4 font-extrabold tracking-tight" style={{fontSize: clamp(36, width*0.08, 140)}}>{data.headline}</div>
          <div className="mt-2" style={{fontSize: clamp(16, width*0.03, 40)}}>
            {data.person}{data.age ? ` turns ${data.age}` : ''}
          </div>
          <div className="mt-6 mx-auto max-w-[900px] bg-white/80 backdrop-blur rounded-3xl p-[3%] text-slate-800" style={{fontSize: clamp(14, width*0.022, 28)}}>
            {data.message}
            <div className="mt-2 opacity-70">{data.from}</div>
          </div>
        </div>
      </div>
    )
  }
}

const EventTemplate = {
  id: 'event_minimal',
  title: 'Event Minimal',
  tags: ['Poster','Minimal','Clean'],
  fields: [
    { name:'title', label:'Title', placeholder:'Tech Meetup 2025', default:'Tech Meetup 2025' },
    { name:'subtitle', label:'Subtitle', placeholder:'AI • Web • Cloud', default:'AI • Web • Cloud' },
    { name:'date', label:'Date', placeholder:'15 Aug 2025', default:'15 Aug 2025' },
    { name:'time', label:'Time', placeholder:'5:00 PM' },
    { name:'venue', label:'Venue', placeholder:'Auditorium, CSE Dept', default:'Auditorium, CSE Dept' },
    { name:'cta', label:'CTA', placeholder:'Register Now →', default:'Register Now →' }
  ],
  preview(){
    return (
      <div className="relative w-[540px] h-[675px] rounded-3xl overflow-hidden bg-white">
        <div className="absolute inset-0 bg-slate-900"/>
        <div className="absolute inset-10 rounded-3xl bg-white grid place-items-center">
          <div className="text-center p-6">
            <div className="text-4xl font-black tracking-tight">Tech Meetup 2025</div>
            <div className="text-sm text-slate-600 mt-1">AI • Web • Cloud</div>
          </div>
        </div>
      </div>
    )
  },
  render({ width, height, data }){
    return (
      <div className="w-full h-full relative bg-slate-900">
        <div className="absolute inset-[6%] rounded-[32px] bg-white p-[6%] flex flex-col items-center justify-center text-center">
          <div className="text-slate-900 font-black tracking-tight" style={{fontSize: clamp(32, width*0.08, 160)}}>{data.title}</div>
          <div className="mt-2 text-slate-600" style={{fontSize: clamp(14, width*0.03, 40)}}>{data.subtitle}</div>
          <div className="mt-6 grid gap-1 text-slate-800" style={{fontSize: clamp(14, width*0.028, 32)}}>
            <div><b>Date:</b> {data.date}</div>
            {data.time && <div><b>Time:</b> {data.time}</div>}
            <div><b>Venue:</b> {data.venue}</div>
          </div>
          <div className="mt-8 px-6 py-3 rounded-full bg-black text-white" style={{fontSize: clamp(14, width*0.03, 36)}}>{data.cta}</div>
        </div>
      </div>
    )
  }
}

export const TEMPLATES = [DiwaliTemplate, BirthdayTemplate, EventTemplate]
