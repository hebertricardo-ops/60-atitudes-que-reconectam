// Declara suporte ao `server.handlers` em createFileRoute e registra os paths das rotas API.
// Pode ser removido quando o dev server regenerar routeTree.gen.ts (ele incluirá os paths automaticamente).
// O `export {}` é obrigatório: torna este arquivo um módulo TS, fazendo os `declare module` abaixo
// funcionarem como augmentações (merge) em vez de sobrescreverem os módulos originais.
export {}

type ApiRouteHandler = (ctx: {
  request: Request
  params: Record<string, string>
  pathname: string
  context: unknown
  next: (opts?: { context?: unknown }) => unknown
}) => Response | Promise<Response> | undefined

declare module '@tanstack/router-core' {
  interface FilebaseRouteOptionsInterface<
    TRegister,
    TParentRoute,
    TId,
    TPath,
    TSearchValidator,
    TParams,
    TLoaderDeps,
    TLoaderFn,
    TRouterContext,
    TRouteContextFn,
    TBeforeLoadFn,
    TRemountDepsFn,
    TSSR,
    TServerMiddlewares,
    THandlers,
  > {
    server?: {
      middleware?: ReadonlyArray<unknown>
      handlers?: Partial<
        Record<
          'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'ANY',
          ApiRouteHandler
        >
      >
    }
  }
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/api/verify-email': {
      id: '/api/verify-email'
      path: '/api/verify-email'
      fullPath: '/api/verify-email'
      preLoaderRoute: any
      parentRoute: any
    }
    '/api/webhook/hotmart': {
      id: '/api/webhook/hotmart'
      path: '/api/webhook/hotmart'
      fullPath: '/api/webhook/hotmart'
      preLoaderRoute: any
      parentRoute: any
    }
  }
}
