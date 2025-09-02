import { Download, TrendingUp, DollarSign, Users, Building } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ReportingSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Panel - Orange */}
          <div className="bg-orange-500 p-12 rounded-lg text-white space-y-6">
            <h2 className="text-4xl lg:text-5xl font-normal leading-tight">
              "How did we spend so much on contractors last quarter?"
            </h2>
            <p className="text-lg text-orange-50 leading-relaxed">
              Pull your historicals and see it all at one glance. Profit & Loss, Balance Sheet report generation, Accounts Receivables, Accounts Payables, Expenses Reports vs Budget, Preparation of Audit Schedules for auditors. Let us handle the numbers while you focus on your vision.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <a 
                href="/lovable-uploads/716ee464-7120-4408-934f-bae29fde4f16.png" 
                download="JEMCO-Services-Brochure.png"
                className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2 hover:bg-black/30 transition-colors"
              >
                <Download className="size-4" />
                <span className="text-sm font-medium">Download Brochure</span>
              </a>
            </div>
          </div>

          {/* Right Panel - Dashboard */}
          <div className="bg-white rounded-lg border shadow-sm p-6 space-y-6">
            {/* Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <TrendingUp className="size-5 text-blue-600" />
                <h3 className="text-xl font-semibold">Profit and Loss - Example</h3>
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
                      <span className="text-2xl font-bold">KSH 125k</span>
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
                      <span className="text-2xl font-bold">KSH 45k</span>
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
                    <span className="text-sm font-medium">KSH 122k</span>
                    <span className="text-sm text-muted-foreground">KSH 124k</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-2">
                    <Users className="size-4 text-red-600" />
                    <span className="text-sm">Contractors</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm font-medium">KSH 20k</span>
                    <span className="text-sm text-muted-foreground">KSH 20k</span>
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