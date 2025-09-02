import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">The foundation for thriving businesses</h2>
                    <p>We help relieve business owners of the burden and mystery of bookkeeping and taxes.</p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">Full Service</h3>
                        </div>
                        <p className="text-sm">Congratulations on your growing business! We know you're here to invest in its future success and we have the tools to help.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />
                            <h3 className="text-sm font-medium">Clean Books & Growth</h3>
                        </div>
                        <p className="text-sm">Get out from under piles of paperwork, clean up your books, and get back to growing your business.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Stress-Free Operations</h3>
                        </div>
                        <p className="text-sm">Banish any stress over payroll, billing, and tax preparation.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />
                            <h3 className="text-sm font-medium">Modern Software</h3>
                        </div>
                        <p className="text-sm">Adopt to the accounting software and resources.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Performance Insights</h3>
                        </div>
                        <p className="text-sm">Always know and understand how your business is performing.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />
                            <h3 className="text-sm font-medium">Better Decisions</h3>
                        </div>
                        <p className="text-sm">Make better decisions by having access to reliable financial information and guidance.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}