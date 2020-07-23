(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{364:function(e,t,o){"use strict";o.r(t);var s=o(25),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"cpus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cpus"}},[e._v("#")]),e._v(" CPUs")]),e._v(" "),o("h2",{attrs:{id:"cpus-to-avoid"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cpus-to-avoid"}},[e._v("#")]),e._v(" CPUs to avoid:")]),e._v(" "),o("p",[e._v("While AMD CPUs can work but we advise against them due to numerous issues still plaguing them as they're not natively supported. They require quite a bit more work to get setup but for those who like would prefer AMD there is the "),o("a",{attrs:{href:"https://vanilla.amd-osx.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("AMD Vanilla Guide"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Common issues with AMD:")]),e._v(" "),o("ul",[o("li",[e._v("Adobe Products don't always work and there is no fix for lightroom at the moment\n"),o("ul",[o("li",[e._v("some fixes can be found here: "),o("a",{attrs:{href:"https://adobe.amd-osx.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adobe Fixes"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Do note these fixes just disable functionality, they're not real fixes")])])]),e._v(" "),o("li",[e._v("Cubase, REAPER, and other audio software crashes on launch\n"),o("ul",[o("li",[e._v("REAPER works "),o("em",[e._v("if")]),e._v(" using the Clang build")]),e._v(" "),o("li",[e._v("There is no fix for Cubase at the moment")]),e._v(" "),o("li",[e._v("Waves plugins also cause crashes")])])]),e._v(" "),o("li",[e._v("Virtual Machine running off of AppleHV's framework will not work(ie: Parallels 15)\n"),o("ul",[o("li",[e._v("VirtualBox works fine as it doesn't use AppleHV")])])]),e._v(" "),o("li",[e._v("Docker broken\n"),o("ul",[o("li",[e._v("Docker toolbox is based off of VirtualBox, many features are unavailable with this")])])]),e._v(" "),o("li",[e._v("Xcode AppleWatch simulator is broken in Catalina\n"),o("ul",[o("li",[e._v("Mojave works fine")])])]),e._v(" "),o("li",[e._v("Microphone input is not available with AppleALC requiring VoodooHDA(quite a bit worse audio quality and overall instability)")]),e._v(" "),o("li",[e._v("Audio Drift issues on Ryzen APUs(G series Chips)\n"),o("ul",[o("li",[e._v("USB DAC is only fix besides new CPU")])])]),e._v(" "),o("li",[e._v("Difficult to setup Sleep(or impossible on some systems)")]),e._v(" "),o("li",[e._v("No CPU Power Management")]),e._v(" "),o("li",[e._v("Not all USB ports work on some boards\n"),o("ul",[o("li",[e._v("This is due to not being assigned in ACPI, you need to manually add them in your DSDT")])])]),e._v(" "),o("li",[e._v("Delayed updates")]),e._v(" "),o("li",[o("strong",[e._v("3rd Gen Threadripper is not supported on bare-metal")]),e._v(" "),o("ul",[o("li",[e._v("KVM solution is the only work-around at this moment")])])])]),e._v(" "),o("p",[e._v("AMD CPUs:")]),e._v(" "),o("ul",[o("li",[e._v("AMD Ryzen 1000 Series")]),e._v(" "),o("li",[e._v("AMD Ryzen 2000 Series")]),e._v(" "),o("li",[e._v("AMD Ryzen 3000 Series")]),e._v(" "),o("li",[e._v("AMD Athlon")]),e._v(" "),o("li",[e._v("AMD ThreadRipper")]),e._v(" "),o("li",[e._v("AMD FX Series")])]),e._v(" "),o("p",[e._v("With Intel, the thanks to most of the CPUs being quite similar they have support when the CPU is spoofed to a supported model. The only downside is that the iGPU rarely work on Atom/Pentium/Celeron these models meaning a cheap iGPU Hackintosh is impossible with these CPUs. Regarding X99/LGA 2011-V3 CPUs, there's the issue that these CPUs were never shipped in a real Mac so quite a few issues are present when running macOS on these systems. Avoid if possible")]),e._v(" "),o("p",[o("strong",[e._v("Dual Socket User Note")]),e._v(": Do note that the macOS kernel only supports a maximum of 64 threads. So for baller setups please be aware. And for dual socket users, you will need to use "),o("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppleMCEReporterDisabler"),o("OutboundLink")],1),e._v(" in macOS Catalina")]),e._v(" "),o("ul",[o("li",[e._v("Intel Atoms")]),e._v(" "),o("li",[e._v("Intel Celerons")]),e._v(" "),o("li",[e._v("Intel Pentiums")]),e._v(" "),o("li",[e._v("Intel X79/LGA 2011")]),e._v(" "),o("li",[e._v("Intel X99/LGA 2011-V3")]),e._v(" "),o("li",[e._v("Intel X299/LGA-2066")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Recommendations")]),e._v(" "),o("p",[e._v("So our overall recommendation for CPUs:")]),e._v(" "),o("ul",[o("li",[e._v("Semi-modern consumer Intel CPUs\n"),o("ul",[o("li",[e._v("Ivy Bridge through Comet Lake are properly supported in macOS")])])])])]),e._v(" "),o("h2",{attrs:{id:"unsupported-cpus"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unsupported-cpus"}},[e._v("#")]),e._v(" Unsupported CPUs")]),e._v(" "),o("p",[e._v("So with outright unsupported CPUs, you're split into 2 camps: Either too old to run or too new that patches aren't supported")]),e._v(" "),o("p",[o("strong",[e._v("Too old to run")]),e._v(":")]),e._v(" "),o("p",[e._v("This mainly consists of CPUs that are missing the SSE4.2 instruction set required for Mojave and newer, you can get around this by replacing the telemetry plugin but not ideal. See "),o("a",{attrs:{href:"https://github.com/khronokernel/trashOS",target:"_blank",rel:"noopener noreferrer"}},[e._v("trashOS repo"),o("OutboundLink")],1),e._v(" for more info")]),e._v(" "),o("ul",[o("li",[e._v("Wolfdale (Intel Core2 Duo series)\n"),o("ul",[o("li",[e._v("E7xxx")]),e._v(" "),o("li",[e._v("E8xxx")])])]),e._v(" "),o("li",[e._v("Yorkfeild (Intel Core2 Quad series)\n"),o("ul",[o("li",[e._v("E8xxx")]),e._v(" "),o("li",[e._v("E9xxx")])])])]),e._v(" "),o("p",[e._v("Then there's the CPUs that are missing the SSE4.1 and older instruction sets, with these support is stuck an OS X 10.11 El Capitan")]),e._v(" "),o("p",[o("strong",[e._v("Too new to run")])]),e._v(" "),o("p",[e._v("Well with this, the only current solution is to run it in a KVM, this is due to the current kernel patches not supporting 19h")]),e._v(" "),o("ul",[o("li",[e._v("3rd Gen Threadripper\n"),o("ul",[o("li",[e._v("3960X")]),e._v(" "),o("li",[e._v("3970X")]),e._v(" "),o("li",[e._v("3990X(the macOS kernel doesn't even support more than 64 threads)")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);