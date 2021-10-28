import React, { ReactElement } from 'react'
import {
  AppleIcon,
  BriefcaseIcon,
  BuildingIcon,
  CartEmptyIcon,
  CartSolidIcon,
  CartOutlineIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardIcon,
  CopyrightIcon,
  DiscordIcon,
  EducationIcon,
  FacebookIcon,
  GiftIcon,
  GoogleIcon,
  HeartOutlineIcon,
  HeartSolidIcon,
  InfinityIcon,
  InstagramIcon,
  LoaderIcon,
  MenuIcon,
  RegStarIcon,
  SearchIcon,
  ThumbsdownIcon,
  ThumbsupIcon,
  TwitterIcon,
  WarningIcon,
  CloseIcon,
  YoutubeIcon,
} from '../../../assets'

export interface IIconsProps {}

const RenderIcons = ({
  title,
  items,
}: {
  title: string
  items: {
    title: string
    Icon: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined
      }
    >
  }[]
}) => (
  <div className="mt-3">
    <div className="mb-2 text-gray-600 ">{title}</div>
    <div className="grid grid-cols-2 gap-3 mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
      {items.map(({ Icon, title: iconName }) => (
        <div className="flex flex-col items-center justify-center p-2 border border-white rounded shadow bg-gray-50">
          <Icon className="w-6 h-6 p-2" />
          <div className="text-sm text-gray-600">{iconName}</div>
        </div>
      ))}
    </div>
  </div>
)

const Icons = () => (
  <div className="bg-gray-100">
    <div className="container mx-auto">
      <h1 className="text-3xl font-thin">Icons</h1>
      <RenderIcons
        title="Collectables"
        items={[
          { title: 'CartEmptyIcon', Icon: CartEmptyIcon },
          { title: 'CartSolidIcon', Icon: CartSolidIcon },
          { title: 'CartOutlineIcon', Icon: CartOutlineIcon },
          { title: 'GiftIcon', Icon: GiftIcon },
          { title: 'HeartOutlineIcon', Icon: HeartOutlineIcon },
          { title: 'HeartSolidIcon', Icon: HeartSolidIcon },
          { title: 'ThumbsdownIcon', Icon: ThumbsdownIcon },
          { title: 'ThumbsupIcon', Icon: ThumbsupIcon },
          { title: 'RegStarIcon', Icon: RegStarIcon },
          { title: 'BriefcaseIcon', Icon: BriefcaseIcon },
        ]}
      />
      <RenderIcons
        title="Simple"
        items={[
          { title: 'CheckIcon', Icon: CheckIcon },
          { title: 'ChevronDownIcon', Icon: ChevronDownIcon },
          { title: 'ChevronUpIcon', Icon: ChevronUpIcon },
          { title: 'CloseIcon', Icon: CloseIcon },
          { title: 'LoaderIcon', Icon: LoaderIcon },
        ]}
      />
      <RenderIcons
        title="Social Media"
        items={[
          { title: 'YoutubeIcon', Icon: YoutubeIcon },
          { title: 'TwitterIcon', Icon: TwitterIcon },
          { title: 'InstagramIcon', Icon: InstagramIcon },
          { title: 'GoogleIcon', Icon: GoogleIcon },
          { title: 'DiscordIcon', Icon: DiscordIcon },
          { title: 'FacebookIcon', Icon: FacebookIcon },
          { title: 'AppleIcon', Icon: AppleIcon },
        ]}
      />
      <RenderIcons
        title="Remaning"
        items={[
          { title: 'BuildingIcon', Icon: BuildingIcon },
          { title: 'ClipboardIcon', Icon: ClipboardIcon },
          { title: 'CopyrightIcon', Icon: CopyrightIcon },
          { title: 'EducationIcon', Icon: EducationIcon },
          { title: 'InfinityIcon', Icon: InfinityIcon },
          { title: 'MenuIcon', Icon: MenuIcon },
          { title: 'SearchIcon', Icon: SearchIcon },
          { title: 'WarningIcon', Icon: WarningIcon },
        ]}
      />
    </div>
  </div>
)

export default Icons
