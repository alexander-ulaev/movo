// import { useRef } from "react";

// import styled from "@emotion/styled";
// import FileUploadIcon from "@mui/icons-material/FileUpload";
// import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";

// const HiddenInput = styled.input`
//   display: none;
// `;

// export const CreateMenu = () => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   return (
//     <MenuList>
//       <MenuItem
//         onClick={() => {
//           inputRef.current?.click();
//         }}
//       >
//         <ListItemIcon>
//           <FileUploadIcon color="primary" fontSize="small" />
//         </ListItemIcon>
//         <ListItemText>Загрузить</ListItemText>
//         <HiddenInput
//           ref={inputRef}
//           type="file"
//           accept=".gpx"
//           onChange={(event) => console.log(event.target.files[0])}
//         />
//       </MenuItem>
//     </MenuList>
//   );
// };
