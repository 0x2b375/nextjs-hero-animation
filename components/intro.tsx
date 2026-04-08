export const IMAGES = [
  "https://i.pinimg.com/736x/3a/70/34/3a7034ed8a49ad2954e00d1ddcdef660.jpg",
  "https://i.pinimg.com/736x/48/68/19/4868191990a108b9a40f4687dc429b65.jpg",
  "https://i.pinimg.com/1200x/20/3d/75/203d75f5e995d44139bb1f7d72dec6a7.jpg",
  "https://i.pinimg.com/1200x/c3/6f/ac/c36fac436533ff68ef1e50e284dabe3c.jpg",
  "https://i.pinimg.com/1200x/8a/1c/20/8a1c20db423f85de20c1269b348713b3.jpg",
  "https://i.pinimg.com/1200x/eb/7f/ee/eb7feeb90d93dcda95620c1f7e413af7.jpg",
  "/hero1.jpg"
]

const Intro = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        {IMAGES.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </div>
  )
}

export default Intro;
