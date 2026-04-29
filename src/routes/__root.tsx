import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { ProgressProvider } from "@/hooks/useProgress";
import { TopBar } from "@/components/app/TopBar";
import { AuthGate } from "@/components/app/AuthGate";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O caminho que você procura não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-primary/90 transition">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Reconectar — um guia íntimo para reaproximar o casal" },
      { name: "description", content: "Pequenas atitudes conscientes para reconstruir conexão, carinho e diálogo no relacionamento." },
      { name: "theme-color", content: "#f6efe6" },
      { property: "og:title", content: "Reconectar — um guia íntimo para reaproximar o casal" },
      { property: "og:description", content: "Pequenas atitudes conscientes para reconstruir conexão, carinho e diálogo no relacionamento." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Reconectar — um guia íntimo para reaproximar o casal" },
      { name: "twitter:description", content: "Pequenas atitudes conscientes para reconstruir conexão, carinho e diálogo no relacionamento." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/8a04ed0f-257d-4e02-8391-c7f41874fcba" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/8a04ed0f-257d-4e02-8391-c7f41874fcba" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <AuthGate>
      <ProgressProvider>
        <div className="min-h-screen flex flex-col">
          <TopBar />
          <main className="flex-1">
            <Outlet />
          </main>
          <footer className="py-10 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground/70 px-px pl-[20px] pr-[20px]">
            feito com cuidado · 60 Atitudes Simples Que Reconectam um Casal em 30 Minutos
          </footer>
        </div>
      </ProgressProvider>
    </AuthGate>
  );
}
