import React from "react";
import { cn } from "@/lib/utils/util";

export type StrategicPillarItem = {
	id: string;
	title: string;
	description: string;
};

export type StrategicPillarSection = {
	Section: string;
	title: string;
	items: StrategicPillarItem[];
};

type StrategicPillarsCardProps = {
	section: StrategicPillarSection;
	titleBackgroundClassName: string;
	titleTextClassName: string;
	titleOnLeft?: boolean;
	className?: string;
};

export default function StrategicPillarsCard({
	section,
	titleBackgroundClassName,
	titleTextClassName,
	titleOnLeft = true,
	className,
}: StrategicPillarsCardProps) {
	const totalItems = section.items.length;
	const desktopColumns = 2;
	const desktopLastRowCount = totalItems % desktopColumns || desktopColumns;
	const desktopLastRowStart = totalItems - desktopLastRowCount;

	const titleBlock = (
		<div
			className={cn(
				"flex min-h-[220px] flex-col justify-center gap-4 border-b-[3px] border-black p-8 sm:p-10 lg:min-h-full lg:border-b-0",
				titleBackgroundClassName,
			)}
		>
			<p className="text-[10px] tracking-[0.35em] uppercase text-white/85">
				{section.Section}
			</p>
			<h2 className={cn("text-4xl font-black uppercase sm:text-5xl", titleTextClassName)}>
				{section.title}
			</h2>
		</div>
	);

	const itemsBlock = (
		<div className="grid grid-cols-1 sm:grid-cols-2">
			{section.items.map((item, index) => {
				const isLastOnMobile = index === totalItems - 1;
				const isRightColumn = index % desktopColumns === desktopColumns - 1;
				const isInDesktopLastRow = index >= desktopLastRowStart;

				return (
					<div
						key={item.id}
						className={cn(
							"bg-[#f3f3f3] p-6",
							!isLastOnMobile && "border-b border-[#1A1C1C] sm:border-b-0",
							!isRightColumn && "sm:border-r sm:border-[#1A1C1C]",
							!isInDesktopLastRow && "sm:border-b sm:border-[#1A1C1C]",
						)}
					>
						<h3 className="text-[12px] font-bold tracking-wide uppercase text-teal-700">
							{item.id} / {item.title}
						</h3>
						<p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
					</div>
				);
			})}
		</div>
	);

	return (
		<article
			className={cn(
				"relative grid grid-cols-1 lg:grid-cols-2 lg:before:pointer-events-none lg:before:absolute lg:before:top-0 lg:before:bottom-0 lg:before:left-1/2 lg:before:w-[3px] lg:before:-translate-x-1/2 lg:before:bg-black lg:before:content-['']",
				className,
			)}
		>
			{titleOnLeft ? (
				<>
					{titleBlock}
					{itemsBlock}
				</>
			) : (
				<>
					{itemsBlock}
					{titleBlock}
				</>
			)}
		</article>
	);
}
