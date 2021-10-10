import styled from 'styled-components'
import EditorsPickCard from '../components/EditorsPickCard'

const SectionHeader = styled.h2`
    color: #fff;
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -.04em;
    line-height: 36px;
    text-transform: none;
    margin-bottom: 16px;
`

export default function Home() {

  return (

        <div style = {{
          height:'100%',
          width:'100%',
          // background:'purple'
        }}>

   <SectionHeader>
           Editor's choice
    </SectionHeader>

    <div style = {{
      display:'flex',
      flexWrap:'wrap',
    }}>
      <EditorsPickCard/>
      <EditorsPickCard/>
      <EditorsPickCard/>
      <EditorsPickCard/>
      <EditorsPickCard/>
      <EditorsPickCard/>
    </div>

        </div>

  );
}

