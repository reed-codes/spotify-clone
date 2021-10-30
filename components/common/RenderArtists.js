import ArtistCard from "./ArtistCard";

const RenderArtist
 = () => {
  const testArr = [
    786, 786, 76, 768, 786, 786, 786, 786, 786, 786, 78678, 88, 868, 886, 7,
    676, 768, 8, 688678, 66, 68, 68, 687868, 786, 786, 786, 786, 768, 786,
  ];

 return  testArr.map(( _ , index) => <ArtistCard key = {index} />)
};

export default RenderArtist
;
