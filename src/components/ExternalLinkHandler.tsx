"use client"

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    type ReactNode,
} from "react"

interface ExternalLinkContextType {
    showWarning: boolean
    targetUrl: string
    isProfessional: boolean
    handleExternalClick: (url: string, isProfessional?: boolean) => void
    closeWarning: () => void
}

const ExternalLinkContext = createContext<ExternalLinkContextType | undefined>(
    undefined
)

export const ExternalLinkHandler = ({ children }: { children: ReactNode }) => {
    const [showWarning, setShowWarning] = useState(false)
    const [targetUrl, setTargetUrl] = useState("")
    const [isProfessional, setIsProfessional] = useState(false)

    const handleExternalClick = (url: string, isProfessional: boolean = false) => {
        setTargetUrl(url)
        setIsProfessional(isProfessional)
        setShowWarning(true)
    }

    const closeWarning = () => {
        setShowWarning(false)
        setTargetUrl("")
        setIsProfessional(false)
    }

    // 🔒 Disable scroll when modal is open
    useEffect(() => {
        if (showWarning) {
        document.body.classList.add("overflow-hidden")
        } else {
        document.body.classList.remove("overflow-hidden")
        }

        return () => {
        document.body.classList.remove("overflow-hidden")
        }
    }, [showWarning])

    return (
        <ExternalLinkContext.Provider
        value={{ showWarning, targetUrl, isProfessional, handleExternalClick, closeWarning }}
        >
        {children}
        {showWarning && (
            <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 max-w-md w-full text-center relative">
                <button
                onClick={closeWarning}
                aria-label="Close"
                className="absolute top-1 right-3 text-gray-400 hover:text-red-500 text-4xl"
                >
                &times;
                </button>

                <h3 className="text-xl font-semibold text-white mb-2">External Link Notice</h3>

                {isProfessional ? (
                <>
                    <p className="text-gray-300 text-sm mb-4">
                    You are about to visit a <b>professional platform</b> or external resource.
                    </p>
                    <p className="text-gray-200 text-sm mb-4">
                    The content on this platform may not reflect my personal views and is owned by a third party.
                    </p>
                </>
                ) : (
                <>
                    <p className="text-gray-300 text-sm mb-4">
                    You are about to visit a <b>social platform</b> or external resource.
                    </p>
                    <p className="text-gray-200 text-sm mb-4">
                    Please note that the content on this platform does not reflect my professional identity or represent me in any official capacity.
                    </p>
                </>
                )}

                <p className="text-gray-100 text-sm mb-4">
                Please proceed with <b>caution</b>.
                </p>

                <div className="flex justify-center gap-4">
                <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeWarning}
                    className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-lg transition-all"
                >
                    Continue
                </a>
                </div>
            </div>
            </div>
        )}
        </ExternalLinkContext.Provider>
    )
}

export const useExternalLink = () => {
    const context = useContext(ExternalLinkContext)
    if (!context) {
        throw new Error("useExternalLink must be used within an ExternalLinkHandler")
    }
    return context
}