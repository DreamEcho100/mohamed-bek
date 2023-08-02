'use client';

import { type ReactNode, type PropsWithChildren } from 'react';
import * as RUITooltip from '@radix-ui/react-tooltip';
import { clsx } from '~/app/utils/common/class-name';

const Tooltip = (props: PropsWithChildren<{ title: string }>) => {
	return (
		<span title={props.title} className='inline-block'>
			{props.children}
		</span>
	);

	return (
		<RUITooltip.Provider>
			<RUITooltip.Root>
				{/* <RUITooltip.Trigger /> */}
				<RUITooltip.Trigger asChild>{props.children}</RUITooltip.Trigger>
				<RUITooltip.Portal>
					<RUITooltip.Content
						className={clsx(
							'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade',
							'text-violet11 rounded-[4px] ',
							'select-none bg-white px-4 py-[10px] text-base text-black leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] w-[min(8rem,_100%)]'
						)}
						sideOffset={5}
					>
						{props.title}
						<RUITooltip.Arrow />
					</RUITooltip.Content>
				</RUITooltip.Portal>
			</RUITooltip.Root>
		</RUITooltip.Provider>
	);
};

export default Tooltip;
