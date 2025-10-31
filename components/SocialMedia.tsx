import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string
}

const socialLink = [
    {
        title: "Youtube",
        href: "https://www.youtube.com",
        icon: <Youtube className='w-5 h-5' />
    },
    {
        title: "Github",
        href: "https://www.Github.com",
        icon: <Github className='w-5 h-5' />
    },
    {
        title: "Linkedin",
        href: "https://www.Linkedin.com",
        icon: <Linkedin className='w-5 h-5' />
    },
    {
        title: "Facebook",
        href: "https://www.Facebook.com",
        icon: <Facebook className='w-5 h-5' />
    },
    {
        title: "slack",
        href: "https://www.Slack.com",
        icon: <Slack className='w-5 h-5' />
    },
]
const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return <TooltipProvider>
        <div className={cn('flex items-center gap-3.5', className)}>
            {socialLink?.map((item) => (
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href={item.href}>
                            {item.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn('bg-white text-darkColor font-semibold', tooltipClassName)}>
                        {item.title}
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    </TooltipProvider>
}

export default SocialMedia