import dayjs from "dayjs";
import {
  AppProvider,
  Button, ConfirmationDialog, DatePicker, Div_AppsLayout, Div_DialogWidgetButtons,
  Div_DialogWidgetTitle, Div_Header, Div_HeaderAppBar, Div_HeaderToolbar, Div_InputChat, Divider, GridFlexContainer, GridItem,
  Input, InputCheckbox, InputEnum, InputFile, LYDarkModeIcon, LYLogoIcon, Main_Content, Select, Typo_AppsName, Typography,
  }
  from "liberty-core";
import { useTheme } from "liberty-core";
import { SyntheticEvent, useCallback, useRef, useState } from "react";
import { setCustomGetEnums } from "./data/enum";
import { customGetModules } from "./data/modules";


const App = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const onFieldChange = useCallback((_event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(_event.target.value);
  }, []);

  const selectOptions = [
    { value: 'test1', label: 'Test 1' },
    { value: 'test2', label: 'Test 2' },
    { value: 'test3', label: 'Test 3' },
  ];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const onInputChange = useCallback((_event: SyntheticEvent<Element, Event>, value: string, reason?: string) => {
    if (reason === 'clear') {
      setSelectedOption(null);  // Clear the selected option
    } else {
      setSelectedOption(value);
    }
  }, [selectedOption]);

  const [openSaveDialog, setOpenSaveDialog] = useState(false);
  const handleDiscardConfirm = useCallback(() => { setOpenSaveDialog(true) }, [setOpenSaveDialog]);
  const handleDiscardDecline = useCallback(() => { setOpenSaveDialog(false) }, [setOpenSaveDialog]);
  const handleDiscardAccept = useCallback(() => { setOpenSaveDialog(false) }, [setOpenSaveDialog]
  );

  const [inputValue, setInputValue] = useState<string>("");
  const [inputDate, setInputDate] = useState<string>("");
  const [inputCheckbox, setInputCheckbox] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onAutocompleteChanged = useCallback((event: any) => {
    console.log("Selected value:", event);
  }, []);


  setCustomGetEnums()

  return (
    <AppProvider getModules={customGetModules}>
      <Div_AppsLayout>
        <Div_HeaderAppBar>
          <Div_HeaderToolbar>
            <Div_Header>
              <LYLogoIcon width="32px" height="32px" />
              <Typo_AppsName noWrap>
                Testing Liberty Core Components
              </Typo_AppsName>
            </Div_Header>
          </Div_HeaderToolbar>
        </Div_HeaderAppBar>
        <Divider />
        <Div_DialogWidgetTitle>
          <Typography>Current Mode: {darkMode ? "Dark" : "Light"}</Typography>
        </Div_DialogWidgetTitle>
        <Divider />
        <Main_Content>
          {/* Theme Toggle */}
          <Div_DialogWidgetButtons>
            <Button
              disabled={false}
              variant="outlined" // Use 'outlined' for a modern, clean look
              startIcon={LYDarkModeIcon}
              onClick={toggleDarkMode}
            >
              Toggle Dark Mode
            </Button>
            <Button
              disabled={false}
              variant="outlined" // Use 'outlined' for a modern, clean look
              onClick={() => setOpenSaveDialog(true)}
            >
              Open confirmation dialog
            </Button>
          </Div_DialogWidgetButtons>
          <GridFlexContainer key="form-grid-1" spacing={4} px={2} py={2}>
            <GridItem
              style={{ flexGrow: 0 }}
              size={12}
              key="grid-item-1"
            >
              <Input
                variant="standard"
                defaultValue={inputValue}
                required
                fullWidth
                id="input-value-1"
                label="Enter a value"
                name="input-value"
                autoComplete="input-value"
                disabled={false}
                onChange={onFieldChange}
              />
            </GridItem>
            <GridItem
              style={{ flexGrow: 0 }}
              size={12}
              key="grid-item-2"
            >
              <Select
                label="Select a value"
                id={`select-value-1`}
                value={selectedOption}
                onChange={onInputChange}
                variant='standard'
                options={selectOptions}
                disablePortal={false}
                fullWidth
                showClearButton={true}
                selectOnly
              />
            </GridItem>
            <GridItem
              style={{ flexGrow: 0 }}
              size={12}
              key="grid-item-3"
            >
              <DatePicker
                // Initialize the picker with the current cell value
                id={`input-date-1`}
                value={inputDate ? dayjs(inputDate) : null}
                disabled={false}
                onChange={(date) => setInputDate(date ? date.format('YYYY-MM-DD') : '')}
              />
            </GridItem>
            <GridItem
              style={{ flexGrow: 0 }}
              size={12}
              key="grid-item-4"
            >
              <InputCheckbox
                id={`input-checkbox-1`}
                key={`input-checkbox-1`}
                label="This is a checkbox"
                defaultValue={inputCheckbox}
                disabled={false}
                onChange={(event: any) => setInputCheckbox(event.value)}
              />
            </GridItem>
            <GridItem
              style={{ flexGrow: 0 }}
              size={12}
              key="grid-item-5"
            >
              <InputEnum
                id="input-enum-1"
                key="input-enum-1"
                enumID={0}
                label="Dictionary Rules"
                defaultValue=''
                disabled={false}
                onChange={onAutocompleteChanged}
                variant="standard"
                freeSolo={true}
                searchByLabel={false}
              />
            </GridItem>
            <GridItem
              style={{ flexGrow: 0 }}
              size={12}
              key="grid-item-6"
            >
              <InputEnum
                id="input-enum-1"
                key="input-enum-1"
                enumID={1}
                label="Dictionary Types"
                defaultValue=''
                disabled={false}
                onChange={onAutocompleteChanged}
                variant="standard"
                freeSolo={true}
                searchByLabel={false}
              />
            </GridItem>
          </GridFlexContainer>
          <Div_InputChat>
            <InputFile
              onFileChange={e => setSelectedFile(e.target.files?.[0] ?? null)}
              fileInputRef={fileInputRef}
              disabled={false}
              accept=".jpg,.png,.pdf"
            />
            <Typography>Upload a file</Typography>
          </Div_InputChat>
        </Main_Content>
        <ConfirmationDialog
          open={openSaveDialog}
          title="Confirmation Dialog"
          content="Are you sure you want to discard the changes?"
          onClose={handleDiscardConfirm}
          onDecline={handleDiscardDecline}
          onAccept={handleDiscardAccept}
        />

      </Div_AppsLayout>
    </AppProvider>
  )
};

export default App;