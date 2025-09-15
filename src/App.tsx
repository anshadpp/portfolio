import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/not-found";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          {/* 👇 Add base="/portfolio" here */}
          <WouterRouter base="/portfolio">
            <Routes />
          </WouterRouter>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

// export default function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-red-500 text-white">
//       <h1 className="text-4xl font-bold">Tailwind Test 🚀</h1>
//     </div>
//   )
// }
