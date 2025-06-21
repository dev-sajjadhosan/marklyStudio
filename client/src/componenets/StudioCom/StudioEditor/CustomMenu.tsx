// import { useEffect } from 'react'
// import useContexts from '../../../hooks/useContexts'

// const CustomMenu = ({ contextMenu, setContextMenu }) => {
//   const { editorRef } = useContexts()
//   const insertTextAtCursor = (text: string) => {
//     const editor = editorRef.current
//     if (!editor) return

//     const selection = editor.getSelection()
//     editor.executeEdits('', [
//       {
//         range: selection,
//         text: text,
//         forceMoveMarkers: true,
//       },
//     ])
//     editor.focus()
//   }
//   useEffect(() => {
//     const closeMenu = () =>
//       setContextMenu((prev) => ({ ...prev, visible: false }))
//     window.addEventListener('click', closeMenu)
//     return () => window.removeEventListener('click', closeMenu)
//   }, [])

//   return (
//     <>
//       {contextMenu.visible && (
//         <ul
//           className="absolute z-50 bg-base-200 shadow-md rounded-md text-sm"
//           style={{
//             top: contextMenu.y,
//             left: contextMenu.x,
//           }}
//           onMouseLeave={() =>
//             setContextMenu((prev) => ({ ...prev, visible: false }))
//           }
//         >
//           <li
//             className="px-4 py-2 hover:bg-base-300 cursor-pointer"
//             onClick={() => {
//               insertTextAtCursor('**bold**')
//               setContextMenu((prev) => ({ ...prev, visible: false }))
//             }}
//           >
//             Insert Bold Text
//           </li>
//           <li
//             className="px-4 py-2 hover:bg-base-300 cursor-pointer"
//             onClick={() => {
//               insertTextAtCursor('```js\nconsole.log("Hello");\n```')
//               setContextMenu((prev) => ({ ...prev, visible: false }))
//             }}
//           >
//             Insert Code Block
//           </li>
//         </ul>
//       )}
//     </>
//   )
// }

// export default CustomMenu
