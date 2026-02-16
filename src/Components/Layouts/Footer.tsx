import Link from "next/link";
// import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold">Producta<span className="text-blue-600">X</span></h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Building modern web applications with Next.js & shadcn/ui.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Updates</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* <Separator className="my-8" /> */}

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NextBrand. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#">Twitter</Link>
            <Link href="#">GitHub</Link>
            <Link href="#">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
