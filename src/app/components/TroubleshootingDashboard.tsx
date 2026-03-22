import { AlertCircle, CheckCircle2, XCircle, FolderTree, Terminal, Code2, ArrowRight, FileCode, Settings, GitBranch } from 'lucide-react';

export function TroubleshootingDashboard() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#161b22] px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-500/10 rounded-lg">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Deployment Error: Build Not Served</h1>
              <p className="text-gray-400 text-lg">
                Your GitHub Pages site is serving source files instead of the production build
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Status Badges */}
        <div className="flex gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 font-medium">Deployment Misconfigured</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-green-400 font-medium">Ready After Fix</span>
          </div>
        </div>

        {/* Error Visualization */}
        <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-500" />
            Error Flow Visualization
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current (Broken) Flow */}
            <div className="space-y-4">
              <div className="text-red-400 font-semibold flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                Current (Broken)
              </div>
              <div className="bg-[#0d1117] rounded-lg p-4 border border-red-500/30">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-sm font-mono">
                    Browser
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500" />
                  <div className="px-3 py-2 bg-gray-700/30 border border-gray-600 rounded text-gray-300 text-sm font-mono">
                    index.html
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-20" />
                  <ArrowRight className="w-4 h-4 text-red-500" />
                  <div className="px-3 py-2 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm font-mono flex items-center gap-2">
                    /src/main.tsx
                    <XCircle className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-500/5 border border-red-500/20 rounded">
                  <p className="text-red-400 text-sm font-mono">
                    GET /src/main.tsx → 404 Not Found
                  </p>
                </div>
              </div>
            </div>

            {/* Correct Flow */}
            <div className="space-y-4">
              <div className="text-green-400 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Correct (After Fix)
              </div>
              <div className="bg-[#0d1117] rounded-lg p-4 border border-green-500/30">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-sm font-mono">
                    Browser
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500" />
                  <div className="px-3 py-2 bg-gray-700/30 border border-gray-600 rounded text-gray-300 text-sm font-mono">
                    index.html
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-20" />
                  <ArrowRight className="w-4 h-4 text-green-500" />
                  <div className="px-3 py-2 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-sm font-mono flex items-center gap-2">
                    /assets/index-[hash].js
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-500/5 border border-green-500/20 rounded">
                  <p className="text-green-400 text-sm font-mono">
                    GET /assets/index-abc123.js → 200 OK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Root Cause Cards */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-500" />
            Root Cause Analysis
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#161b22] border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors">
              <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-3">
                <FolderTree className="w-5 h-5 text-yellow-500" />
              </div>
              <h3 className="font-semibold mb-2">Wrong Publish Directory</h3>
              <p className="text-gray-400 text-sm">
                GitHub Pages is serving from root instead of the <code className="text-yellow-400 bg-yellow-400/10 px-1 rounded">dist/</code> folder
              </p>
            </div>

            <div className="bg-[#161b22] border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-3">
                <Terminal className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Build Not Generated</h3>
              <p className="text-gray-400 text-sm">
                The production build hasn't been created or deployed to GitHub
              </p>
            </div>

            <div className="bg-[#161b22] border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors">
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-3">
                <Settings className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-semibold mb-2">Incorrect Base Path</h3>
              <p className="text-gray-400 text-sm">
                Vite config missing proper <code className="text-red-400 bg-red-400/10 px-1 rounded">base</code> path for GitHub Pages
              </p>
            </div>
          </div>
        </section>

        {/* Fix Steps */}
        <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Step-by-Step Fix
          </h2>
          
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Navigate to Project Folder",
                command: "cd DevSampleWebsites",
                description: "Open terminal in your project directory"
              },
              {
                step: 2,
                title: "Run Build Command",
                command: "npm run build",
                description: "Generate production-ready files"
              },
              {
                step: 3,
                title: "Verify dist/ Folder Generated",
                command: "ls -la dist/",
                description: "Ensure dist folder contains index.html and assets/"
              },
              {
                step: 4,
                title: "Push Changes to GitHub",
                command: "git add . && git commit -m \"Fix deployment\" && git push",
                description: "Deploy the updated configuration"
              },
              {
                step: 5,
                title: "Verify Deployment",
                command: "Check GitHub Actions tab",
                description: "Wait for workflow to complete successfully"
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                  <div className="bg-[#0d1117] border border-gray-800 rounded px-4 py-2 font-mono text-sm text-green-400">
                    $ {item.command}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Code Snippets */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileCode className="w-5 h-5 text-purple-500" />
            Configuration Files
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Vite Config */}
            <div className="bg-[#161b22] border border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-[#0d1117] px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                <span className="text-sm font-mono text-gray-400">vite.config.ts</span>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code className="text-gray-300">
{`export default defineConfig({
  base: '/DevSampleWebsites/',
  build: {
    outDir: 'dist',
  }
})`}
                </code>
              </pre>
            </div>

            {/* Built index.html */}
            <div className="bg-[#161b22] border border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-[#0d1117] px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                <span className="text-sm font-mono text-gray-400">dist/index.html (after build)</span>
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code className="text-gray-300">
{`<script type="module" 
  src="/DevSampleWebsites/assets/
  index-abc123.js">
</script>`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* File Structure */}
        <section className="bg-[#161b22] border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FolderTree className="w-5 h-5 text-cyan-500" />
            Expected File Structure
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                ❌ Wrong (Source Files)
              </div>
              <div className="bg-[#0d1117] border border-red-500/30 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400">DevSampleWebsites/</div>
                <div className="ml-4 text-gray-500">├── src/</div>
                <div className="ml-8 text-red-400">│   └── main.tsx ← 404 error</div>
                <div className="ml-4 text-gray-500">├── index.html</div>
                <div className="ml-4 text-gray-500">└── package.json</div>
              </div>
            </div>

            <div>
              <div className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                ✅ Correct (Built Files)
              </div>
              <div className="bg-[#0d1117] border border-green-500/30 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400">DevSampleWebsites/</div>
                <div className="ml-4 text-green-400">└── dist/</div>
                <div className="ml-8 text-gray-300">├── index.html</div>
                <div className="ml-8 text-gray-300">└── assets/</div>
                <div className="ml-12 text-green-400">└── index-abc123.js ✓</div>
              </div>
            </div>
          </div>
        </section>

        {/* React Router Note */}
        <section className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <GitBranch className="w-5 h-5 text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">React Router Configuration</h3>
              <p className="text-gray-300 mb-3">
                If using React Router, ensure the basename matches your repository name:
              </p>
              <div className="bg-[#0d1117] border border-gray-800 rounded px-4 py-3 font-mono text-sm">
                <code className="text-gray-300">
                  {`createBrowserRouter(routes, {\n  basename: "/DevSampleWebsites/"\n})`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-400 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Ready to Deploy?</h3>
              <p className="text-gray-300 mb-4">
                After implementing these fixes, your site should load correctly at:
              </p>
              <div className="bg-[#0d1117] border border-gray-800 rounded px-4 py-3 font-mono text-blue-400">
                https://mattjnuval.github.io/DevSampleWebsites/
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12 px-6 py-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>Vite + React + GitHub Pages Troubleshooting Dashboard</p>
        </div>
      </footer>
    </div>
  );
}
