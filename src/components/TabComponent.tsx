import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SmallText, SmallerText } from '@/components/texts'

type workExperience = {
  role: string,
  company: string,
  timeline: string,
  details?: string[],
  url?: string,
}
type Props = {
    experience:workExperience[]
}




export default ({experience}:Props) => (
  <Tabs className="flex flex-col md:flex-row gap-5 max-w-full">
    <TabList className="min-w-max max-h-max px-5 flex flex-row md:flex-col cursor-pointer overflow-scroll">
      {
        experience.map((item) =>
          <Tab 
          selectedClassName='selectedTab'
          className=" md:border-l-4 border-l-0 border-bg4 px-5  border-b-2 md:border-b-0 border-solid max-h-max px-2">
            <SmallText text={item.company}></SmallText>
          </Tab>)
      }

    </TabList>


    <div>


      {
        experience.map((item) =>
          <TabPanel
            className=' w-full flex flex-col gap-4'
          >
            <span className='flex gap-4'>
              <SmallText text={item.role}></SmallText>
              <SmallerText className=' text-bg4' text={'@ ' + item.company}></SmallerText>
            </span>
            <SmallerText text={item.timeline}></SmallerText>
            <ul className='flex flex-col gap-2 list-inside list-square'>
              {
                item.details?.map((d) =>
                  <li>   <SmallerText text={d}></SmallerText></li>
                )
              }
            </ul>


          </TabPanel>
        )
      }



    </div>
  </Tabs>
);