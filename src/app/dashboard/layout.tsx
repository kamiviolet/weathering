export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
      <section className="flex flex-col place-items-center bg-slate-400 min-h-[50vh] w-screen p-24">
        {children}
      </section>
    )
  }