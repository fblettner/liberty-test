import { Button, ConfirmationDialog, Div_AppsLayout, Div_DialogWidgetButtons, Div_DialogWidgetContent, Div_DialogWidgetTitle, Div_Header, Div_HeaderAppBar, Div_HeaderToolbar, Divider, GridFlexContainer, GridItem, Input, LYDarkModeIcon, LYLogoIcon, Main_Content, Select, Typo_AppsName, Typography } from "liberty-core"; // Import your reusable component
import { useTheme } from "liberty-core";
import { SyntheticEvent, useCallback, useState } from "react";

const App = () => {
  const { darkMode, toggleDarkMode } = useTheme();


  const onFieldChange = useCallback((_event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
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
            <form
              style={{ height: "100%", width: "100%" }}
              id={`dialog-form-item-1`}
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                variant="standard"
                required
                fullWidth
                id="input-value-1"
                label="Enter a value"
                name="input-value"
                autoComplete="input-value"
                disabled={false}
                onChange={onFieldChange}
              />
            </form>
          </GridItem>
          <GridItem
            style={{ flexGrow: 0 }}
            size={12}
            key="grid-item-2"
          >
            <form
              style={{ height: "100%", width: "100%" }}
              id={`dialog-form-item-2`}
              onSubmit={(e) => e.preventDefault()}
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
            </form>
          </GridItem>
        </GridFlexContainer>

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
  )
};

export default App;