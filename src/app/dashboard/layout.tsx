export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
      <section className="flex flex-col place-items-center w-screen h-full overflow-y-auto z-20">
        {children}
      </section>
    )
  }