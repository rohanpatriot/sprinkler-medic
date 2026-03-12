import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCTABar } from '@/components/ui/MobileCTABar'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <MobileCTABar />
    </>
  )
}
