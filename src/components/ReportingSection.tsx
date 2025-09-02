import { Play, TrendingUp, DollarSign, Users, Building } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ReportingSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Panel - Dark Green */}
          <div className="bg-slate-700 p-12 rounded-lg text-white space-y-6">
            <h2 className="text-4xl lg:text-5xl font-normal leading-tight">
              "How did we spend so much on contractors last quarter?"
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed">
              Pull your historicals directly from QuickBooks/Xero, and drill down into 
              the transactions behind each number without having to jump between 
              browser tabs or chase your accountant.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2">
                <Play className="size-4" />
                <span className="text-sm font-medium">Financial Reporting</span>
                <span className="text-xs text-slate-300">• 2 min</span>
              </div>
            </div>
            <div className="pt-6">
              <p className="text-sm text-slate-300 font-medium">Get started with:</p>
            </div>
          </div>

          {/* Right Panel - Dashboard */}
          <div className="bg-white rounded-lg border shadow-sm p-6 space-y-6">
            {/* Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <TrendingUp className="size-5 text-blue-600" />
                <h3 className="text-xl font-semibold">Profit and Loss</h3>
              </div>
              <p className="text-sm text-muted-foreground">Business dashboard</p>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Building className="size-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Department:</span>
                <span className="text-sm font-medium">All</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="size-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Scenario:</span>
                <span className="text-sm font-medium">Current Year</span>
              </div>
            </div>

            {/* Core KPIs */}
            <div className="space-y-3">
              <h4 className="font-medium text-muted-foreground">Core KPIs</h4>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Revenue</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">$125k</span>
                      <div className="h-8 w-16 bg-blue-100 rounded flex items-end">
                        <div className="h-2 bg-blue-500 rounded w-full"></div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Monthly expenses</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">$45k</span>
                      <div className="h-8 w-16 bg-purple-100 rounded flex items-end">
                        <div className="h-3 bg-purple-500 rounded w-full"></div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Profit & Loss Details */}
            <div className="space-y-3">
              <h4 className="font-medium text-muted-foreground">Profit & Loss</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b">
                  <div className="flex items-center gap-2">
                    <DollarSign className="size-4 text-green-600" />
                    <span className="text-sm">Services</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm font-medium">$122k</span>
                    <span className="text-sm text-muted-foreground">$124k</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-2">
                    <Users className="size-4 text-red-600" />
                    <span className="text-sm">Contractors</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm font-medium">$20k</span>
                    <span className="text-sm text-muted-foreground">$20k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom tabs */}
            <div className="flex gap-4 pt-4 border-t">
              <button className="text-sm px-3 py-1 rounded bg-blue-100 text-blue-700 font-medium">
                Profit and loss
              </button>
              <button className="text-sm px-3 py-1 text-muted-foreground">
                Software vendors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportingSection;