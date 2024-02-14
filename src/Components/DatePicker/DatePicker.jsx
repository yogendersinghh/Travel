import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import dayjs from "dayjs";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Chip from "@mui/material/Chip";
import { Divider, Box } from "@mui/material";

const shortcutsItems = [
  {
    label: "Tonight",
    getValue: () => {
      const tonight = dayjs().startOf("day").add(18, "hours");
      const nextDay = tonight.add(1, "day").endOf("day");
      return [tonight, nextDay];
    },
  },
  {
    label: "Tomorrow",
    getValue: () => {
      const tomorrow = dayjs().startOf("day").add(1, "day");
      const dayAfterTomorrow = tomorrow.add(1, "day").endOf("day");
      return [tomorrow, dayAfterTomorrow];
    },
  },
  {
    label: "Next Weekend",
    getValue: () => {
      const today = dayjs();
      const nextFriday = today.day(12).startOf("day"); // Next Friday
      const nextSunday = nextFriday.add(2, "day").endOf("day"); // Next Sunday
      return [nextFriday, nextSunday];
    },
  },
  {
    label: "This Weekend",
    getValue: () => {
      const today = dayjs();
      const friday = today.day(5).startOf("day");
      const sunday = friday.add(2, "day").endOf("day");
      return [friday, sunday];
    },
  },
  {
    label: "Next Month",
    getValue: () => {
      const today = dayjs();
      const startOfNextMonth = today.endOf("month").add(1, "day");
      return [startOfNextMonth, startOfNextMonth.endOf("month")];
    },
  },
];

function CustomRangeShortcuts(props) {
  const { items, onChange, isValid } = props;

  if (items == null || items.length === 0) {
    return null;
  }

  const resolvedItems = items.map((item) => {
    const newValue = item.getValue({ isValid });

    return {
      icon: <i class="fa-regular fa-calendar"></i>,
      label: item.label,
      onClick: () => {
        onChange(newValue);
      },
      disabled: !isValid(newValue),
    };
  });

  return (
    <Box
      sx={{
        gridRow: 3,
        gridColumn: 2,
      }}
    >
      <Divider />

      <List
        dense
        sx={(theme) => ({
          display: "flex",
          px: theme.spacing(4),
          "& .MuiListItem-root": {
            pt: 0,
            pl: 0,
            pr: theme.spacing(1),
          },
        })}
      >
        {resolvedItems.map((item) => {
          return (
            <ListItem key={item.label}>
              <Chip {...item} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

const DatePicker = ({ type, setIsDatePickerVisible, setCalender }) => {
  const calenderHandler = (dateRange) => {
    const checkinDate =
      dateRange[0] &&
      dayjs(dateRange[0].$d).format("dddd, YYYY-MM-DD").split(", ");
    const checkoutDate =
      dateRange[1] &&
      dayjs(dateRange[1].$d).format("dddd, YYYY-MM-DD").split(", ");
    setCalender((prev) => ({
      checkin: {
        day: checkinDate?.[0] || "",
        date: checkinDate?.[1] || "",
      },
      checkout: {
        day: checkoutDate?.[0] || "",
        date: checkoutDate?.[1] || "",
      },
    }));
    if (dateRange.filter(Boolean).length === 2) {
      setIsDatePickerVisible(false);
    }
  };
  return (
    <>
      <div className="date-modal--wrapper">
        <div className="date"></div>
        <div className="heading--level">
          <div className="content--modal">
            <p className="title">Select your {type} date</p>{" "}
            <p className="title">See prices and availability for your dates</p>
          </div>
          <div className="close--btn">
            <span
              onClick={() => {
                setIsDatePickerVisible(false);
              }}
            >
              <i class="fa-solid fa-xmark"></i>
            </span>
          </div>
        </div>{" "}
      </div>
      <hr />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateRangePicker
          minDate={dayjs()}
          slots={{
            shortcuts: CustomRangeShortcuts,
          }}
          slotProps={{
            shortcuts: {
              items: shortcutsItems,
            },
            toolbar: {
              hidden: true,
            },
            actionBar: {
              hidden: true,
            },
          }}
          calendars={2}
          showDaysOutsideCurrentMonth={false}
          onChange={calenderHandler}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
