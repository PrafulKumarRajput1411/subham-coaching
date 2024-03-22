// inter for book demo session class array
export interface ClassList {
    _id: string,
    class_uuid: string,
    class_value: string,
    class_title: string,
    class_status: boolean,
    __v: number
}

//interface for book demo session board array
export interface BoardList {
    _id: string,
    board_uuid: string,
    board_title: string,
    board_status: boolean,
    __v: number
}

//interface for available day list array
export interface AvailableDaylist {
    _id: string,
    days_uuid: string,
    days_value: string,
    day_status: boolean,
    __v: number
}

//interface for available time slot array
export interface AvailableTimeSlot {
    _id: string,
    time_slot_uuid: string,
    start_time_hour: string,
    start_time_min: string,
    is_start_AM: boolean,
    end_time_min: string,
    is_end_AM: boolean,
    available_day_uuid: string,
    __v: number,
    end_time_hour: string

}