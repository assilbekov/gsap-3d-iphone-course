

export const Loader = () => {
  return (
    <mesh>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"#495057"} />
    </mesh>
  )
}