import Carousel from './carousel';
import Genre from './Genre';
function Home() {
    return (
        <>
            <Carousel img1="https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/new-project1461645183844683.jpg" img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJzW5G0YjjWJmJha_ZnyAON8X9_8pmgSh6Tv_D6sCJnTjx8WA3RXL6Ndj1TTtNEc861o&usqp=CAU" img3="https://www.thecuriousreader.in/wp-content/uploads/2020/06/List-2019-4_Cover-9-Mystery-Novels-Written-By-Indian-Authors.png" img4="https://static.toiimg.com/photo/61117317.cms" />
            <Genre />
        </>
    )
}
export default Home;