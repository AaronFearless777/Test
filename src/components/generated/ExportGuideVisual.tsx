/**
 * VISUAL EXPORT GUIDE - View this component to see the export instructions
 * in a beautiful, interactive format in your browser!
 */

import React from 'react';
import { CheckCircle, Copy, Download, FileText, Folder, Package, Zap } from 'lucide-react';
export default function ExportGuideVisual() {
  const files = [{
    name: 'App-Lovable.tsx',
    desc: 'Simplified App.tsx',
    icon: FileText,
    color: 'blue'
  }, {
    name: 'main-Lovable.tsx',
    desc: 'Simplified main.tsx',
    icon: FileText,
    color: 'blue'
  }, {
    name: 'index.css',
    desc: 'Styles with animations',
    icon: FileText,
    color: 'purple'
  }, {
    name: 'CombinedLandingPage.tsx',
    desc: 'Main page wrapper',
    icon: Folder,
    color: 'green'
  }, {
    name: 'NavigationHeader.tsx',
    desc: 'Sticky navigation',
    icon: Folder,
    color: 'green'
  }, {
    name: 'HeroSection.tsx',
    desc: 'Hero with video',
    icon: Folder,
    color: 'green'
  }, {
    name: 'CustomerLogosCarousel.tsx',
    desc: 'Animated logos',
    icon: Folder,
    color: 'green'
  }, {
    name: 'IntegrationShowcase.tsx',
    desc: 'Integrations',
    icon: Folder,
    color: 'green'
  }, {
    name: 'PleoBuyerSpend.tsx',
    desc: 'Tabbed content',
    icon: Folder,
    color: 'green'
  }, {
    name: 'CustomerStoriesHero.tsx',
    desc: 'Testimonials',
    icon: Folder,
    color: 'green'
  }, {
    name: 'EmailSignupForm.tsx',
    desc: 'Email capture',
    icon: Folder,
    color: 'green'
  }, {
    name: 'Footer_dupe_2.tsx',
    desc: 'Footer (rename!)',
    icon: Folder,
    color: 'orange'
  }];
  const steps = [{
    num: 1,
    title: 'Create Lovable Project',
    desc: 'Start a new React + TypeScript project on lovable.dev',
    icon: Zap
  }, {
    num: 2,
    title: 'Install Dependencies',
    desc: 'npm install framer-motion lucide-react tailwindcss-animate',
    icon: Package
  }, {
    num: 3,
    title: 'Copy Files',
    desc: 'Copy all 12 files listed below to your Lovable project',
    icon: Copy
  }, {
    num: 4,
    title: 'Rename Footer',
    desc: 'Rename Footer_dupe_2.tsx to Footer.tsx',
    icon: FileText
  }, {
    num: 5,
    title: 'Fix Import',
    desc: 'Update Footer import in CombinedLandingPage.tsx',
    icon: FileText
  }, {
    num: 6,
    title: 'Test & Deploy',
    desc: 'Run npm run dev, verify everything works, then deploy!',
    icon: CheckCircle
  }];
  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-700',
      green: 'bg-green-50 border-green-200 text-green-700',
      purple: 'bg-purple-50 border-purple-200 text-purple-700',
      orange: 'bg-orange-50 border-orange-200 text-orange-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };
  return <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 EXPORT READY
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Lovable.dev Export Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your complete landing page is ready! Follow these steps to export to Lovable.dev in just 10 minutes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-500">
            <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Files to Copy</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-500">
            <div className="text-4xl font-bold text-green-600 mb-2">8</div>
            <div className="text-sm text-gray-600">Components</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-purple-500">
            <div className="text-4xl font-bold text-purple-600 mb-2">10</div>
            <div className="text-sm text-gray-600">Min Setup</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-orange-500">
            <div className="text-4xl font-bold text-orange-600 mb-2">0</div>
            <div className="text-sm text-gray-600">Backend Required</div>
          </div>
        </div>

        {/* Steps */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Zap className="text-yellow-500" />
            Quick Start Steps
          </h2>
          <div className="space-y-4">
            {steps.map(step => {
            const Icon = step.icon;
            return <div key={step.num} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-5 h-5 text-purple-600" />
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>;
          })}
          </div>
        </div>

        {/* Files List */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Download className="text-blue-500" />
            Files to Copy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {files.map(file => {
            const Icon = file.icon;
            return <div key={file.name} className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all hover:shadow-md ${getColorClasses(file.color)}`}>
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-sm font-semibold truncate">
                      {file.name}
                    </div>
                    <div className="text-xs opacity-75">{file.desc}</div>
                  </div>
                </div>;
          })}
          </div>
        </div>

        {/* Dependencies */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Package className="w-8 h-8" />
            Required Dependencies
          </h2>
          <div className="bg-black/20 rounded-lg p-4 font-mono text-sm mb-4">
            npm install framer-motion lucide-react tailwindcss-animate
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-bold mb-1">framer-motion</div>
              <div className="text-sm opacity-90">Smooth animations</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-bold mb-1">lucide-react</div>
              <div className="text-sm opacity-90">Beautiful icons</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-bold mb-1">tailwindcss-animate</div>
              <div className="text-sm opacity-90">Tailwind animations</div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800 flex items-center gap-2">
            ⚠️ Important Notes
          </h2>
          <ul className="space-y-2 text-yellow-800">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span><strong>Rename</strong> Footer_dupe_2.tsx to Footer.tsx</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span><strong>Update</strong> Footer import in CombinedLandingPage.tsx</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span><strong>Delete</strong> dnd-kit folder (not needed for Lovable)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span><strong>Keep</strong> index.css animations intact</span>
            </li>
          </ul>
        </div>

        {/* Documentation */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <FileText className="text-green-500" />
            Documentation Files
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border-2 border-green-200">
              <FileText className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-bold text-green-800">LOVABLE-EXPORT-GUIDE.tsx</div>
                <div className="text-sm text-green-600">Complete step-by-step guide with all details</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <FileText className="w-6 h-6 text-blue-600" />
              <div>
                <div className="font-bold text-blue-800">QUICK-EXPORT-CHECKLIST.tsx</div>
                <div className="text-sm text-blue-600">Quick reference checklist</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
              <FileText className="w-6 h-6 text-purple-600" />
              <div>
                <div className="font-bold text-purple-800">EXPORT-SUMMARY.md</div>
                <div className="text-sm text-purple-600">Overview and file mapping</div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-2xl p-8 text-white text-center">
          <CheckCircle className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">You're All Set! 🎉</h2>
          <p className="text-xl mb-6 opacity-90">
            Everything is ready to export to Lovable.dev
          </p>
          <div className="bg-white/20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-sm mb-4">
              Follow the steps above, and you'll have a production-ready landing page
              deployed in just 10 minutes!
            </p>
            <p className="text-xs opacity-75">
              For detailed instructions, see LOVABLE-EXPORT-GUIDE.tsx
            </p>
          </div>
        </div>

      </div>
    </div>;
}