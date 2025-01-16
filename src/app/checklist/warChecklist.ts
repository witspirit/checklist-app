import {check, Checklist} from "@/app/checklist/checklist-support";

export const warChecklist: Checklist = {
    name: 'OO-WAR',
    phases: [
        {
            name: 'Preflight - interior',
            checks: [
                check('POH and documents', 'on board & checked'),
                check('Online trouble report', 'checked'),
                check('Fire extinguisher & First aid kit', 'on board'),
                check('Ignition', 'off & key removed'),
                check('Master switch', 'on'),
                check('Annunciator panel', 'checked'),
                check('Fuel quantity', 'checked'),
                check('Interior lights', 'checked'),
                check('All lights', 'on'),
                check('Pitot heat', 'on'),
                check('Lights', 'checked'),
                check('Stall warning', 'checked'),
                check('Pitot', 'warm'),
                check('Electrical switches', 'off'),
                check('Master switch', 'off'),
                check('Parking brake', 'set'),
                check('Pitot & static system', 'drained'),
                check('Flaps', 'down'),
                check('Trims', 'neutral'),
                check('Tow bar & chocks', 'removed'),
                check('Windows', 'clean'),
                check('Baggage', 'secure'),
                check('Baggage door', 'closed & locked')
            ]
        },
        {
            name: 'Preflight - exterior',
            checks: [
                check('Wing surface', 'checked free'),
                check('Flap & aileron + hinges', 'checked'),
                check('Static wicks', 'checked'),
                check('Fuel tank', 'checked & secured'),
                check('Fuel tank sump', 'drained'),
                check('Fuel vent', 'clear'), // Where is the fuel vent really ?
                check('Main gear strut', 'checked'),
                check('Tire', 'checked'),
                check('Brakes', 'checked'), // How ?
                check('Fresh air inlet', 'clear'), // Where ?
                check('Fuel & oil', 'check for leaks'),
                check('Cowling', 'secure'),
                check('Windshield', 'clean'),
                check('Propeller and spinner', 'check'),
                check('Air inlets', 'clear'),
                check('Alternator belt', 'check tension'), // Really ?
                check('Oil level', 'checked'),
                check('Fuel strainer', 'drained & checked'),
                check('Pitot tube', 'checked'),
                check('Antennas', 'checked'),
                check('Empennage', 'clear'), // ?
                check('Fresh air inlet', 'clear'), // Where ?
                check('Stabilo & trim tab', 'checked')
            ]
        },
        {
            name: 'iPad startup',
            checks: [
                check('Aerolync', 'flight started'),
                check('Headset', 'on & bluetooth linked'),
                check('SafeSky', 'OO-WAR Take-off'),
                check('SkyDemon', 'Go Flying (GDL90)')
            ]
        },
        {
            name: 'Before start',
            checks: [
                check('Flightplan', 'filed', ['night']),
                check('Documents', 'on-board & checked'),
                check('Seats & belts', 'adjusted & locked'),
                check('Doors', 'closed & locked'),
                check('Flight instruments', 'checked & set'),
                check('Electrical switches', 'off'),
                check('Avionics master switch', 'off'),
                check('Throttle', 'closed'),
                check('Mixture', 'full rich'),
                check('Carburetor heat', 'off'),
                check('Circuit breakers', 'all in'),
                check('Ignition', 'off & key ready'),
                check('Fuel selector ', 'lowest tank'),
                check('Alternate static', 'checked & off'),
                check('Flaps', 'checked & set'),
                check('Master switch & alternator', 'on'),
                check('Navigation light', 'on', ['night']),
                check('Annunciator panel', 'tested')
            ]
        },
        {
            name: 'Engine start',
            checks: [
                check('Brakes', 'set'),
                check('Electrical fuel pump', 'on'),
                check('Strobe light', 'on'),
                check('Throttle', '1 cm open'),
                check('Primer', 'as required'),
                check('Propeller area', 'clear'),
                check('Starter', 'engage'),
                check('Engine rpm', 'adjust to 1000-1200'),
                check('Oil pressure', 'rising'),
                check('Alternator output', 'checked'),
                check('SkyDemon', 'Log engine start')
            ]
        },
        {
            name: 'After start',
            checks: [
                check('Electrical fuel pump', 'off'),
                check('Avionics master switch', 'on'),
                check('Annunciator panel', 'checked'),
                check('Engine instruments', 'checked'),
                check('Attitude indicator', 'aligned'),
                check('Directional gyro', 'aligned'),
                check('Electrical vacuum pump', 'tested and off'),
                check('Radios and navaids', 'on & set'),
                check('Landing light', 'on', ['night']),
                check('Recognition lights', 'on', ['night']),
            ]
        },
        {
            name: 'Taxi',
            checks: [
                check('Brakes', 'checked'),
                check('Flight instruments', 'checked')

                // Flight instruments is probably the old
                // - Pin in
                // - Ball out
                // - Horizon stable
                // - Gyro and compass increasing / decreasing
                // - ADF tracking
            ]
        },
        {
            name: 'Engine run-up',
            checks: [
                check('Fuel selector', 'fullest tank'),
                check('Throttle', '2000 rpm'),
                check('Engine instruments', 'in limits'),
                check('Directional gyro', 'aligned'),
                check('Ignition', 'checked 175/50'),
                check('Carburetor heat', 'checked'),
                check('Throttle', 'idle, then 1000 rpm')
            ]
        },
        {
            name: 'Before take-off',
            checks: [
                check('Engine run-up', 'performed'),
                check('Doors & windows', 'locked'),
                check('Seats & belts', 'locked and tight'),
                check('Flight controls', 'free and correct'),
                check('Alternator', 'on'),
                check('Electrical fuel pump', 'on'),
                check('Fuel selector', 'fullest tank'),
                check('Ignition', 'both'),
                check('Mixture', 'full rich'),
                check('Carburetor heat', 'off'),
                check('Flaps', 'set'),
                check('Trims', 'set'),
                check('Departure briefing', 'reviewed')

                // Departure briefing includes:
                // Engine failure before take-off -> throttle idle & stop
                // Engine failure after take-off
                //   Best glide 73 kts
                //   No turns below 800 ft
                //   No turns more than 30 degrees left or right
                //   Nose in the wind, which is left/right
                // Normal procedure
                //   Rotate at 60
                //   Climb at 70 (until 10000 ft)
                //   First turn and direction, clearance
            ]
        },
        {
            name: 'Line-up',
            checks: [
                check('Approach area', 'clear'),
                check('Pitot heat', 'as required'),
                check('Landing light', 'on'),
                check('Strobe lights', 'on'),
                check('Transponder', 'ALT'),
                check('Threshold elevation', 'checked'),
                check('QFU', 'checked')
            ]
        },
        {
            name: 'Take-off',
            checks: [
                check('Engine parameters', 'checked'),
                check('Carburetor heat', 'off'),
                check('Airspeed indication', 'checked')
            ]
        },
        {
            name: 'After take-off',
            alternate: 'Landing',
            checks: [
                check('Brakes', 'applied'),
                check('Engine pressures and temperatures', 'in limits'),
                check('Electrical fuel pump', 'off'),
                check('Landing light', 'off'),
                check('Flaps', 'up')
            ]
        },
        {
            name: 'Approach',
            checks: [
                check('Directional gyro', 'aligned'),
                check('Altimeters', 'set'),
                check('Landing light', 'on'),
                check('Electrical fuel pump', 'on'),
                check('Engine instruments', 'checked'),
                check('Mixture', 'as required'),
                check('Carburetor heat', 'checked'),
                check('Fuel selector', 'fullest tank'),
                check('Approach briefing', 'reviewed')

                // What constitutes the approach briefing ?
                // Runway in use ? Approach clearance ?
            ]
        },
        {
            name: 'Landing',
            checks: [
                check('Approach area', 'clear'),
                check('Brakes', 'checked'),
                check('Mixture', 'full rich'),
                check('Flaps', 'set')
            ]
        },
        {
            name: 'Short final',
            alternate: 'After take-off',
            checks: [
                check('Carburetor heat', 'off')
            ]
        },
        {
            name: 'After landing',
            checks: [
                check('Electrical fuel pump', 'off'),
                check('Pitot heat', 'off'),
                check('Landing light', 'off', ['day']),
                check('Transponder', 'standby'),
                check('Flaps', 'up')
            ]
        },
        {
            name: 'Shutdown',
            alternate: 'Before start',
            checks: [
                check('Avionics master switch', 'off'),
                check('Mixture', 'cut off'),
                check('Throttle', 'closed'),
                check('Ignition', 'off & key removed'),
                check('Electrical switches', 'all off'),
                check('Parking brake', 'as required'),
                check('Trims', 'neutral'),
                check('Control lock', 'as required')
            ]
        },
        {
            name: 'iPad shutdown',
            alternate: 'iPad startup',
            checks: [
                check('SkyDemon', 'log engine off'),
                check('Headset', 'off'),
                check('SafeSky', 'flight closed'),
                check('Aerolync', 'flight completed')
            ]
        }
    ]
}
