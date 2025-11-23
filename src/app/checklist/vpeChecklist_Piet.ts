import {check, Checklist, item} from "@/app/checklist/checklist-support";

export const vpeChecklist_Piet: Checklist = {
    name: 'OO-VPE (Piet)',
    phases: [
        {
            name: 'Preflight - interior',
            checks: [
                check('Parking brake', 'set'),
                check('Engine master switch', 'off'),
                check('Avionics master switch', 'off'),
                check('POH', 'available within reach'),
                check('Aircraft documents', 'available and checked'),
                check('Flight documents', 'available within reach'),
                check('Headsets', 'installed'),
                check('Flight instruments', 'check'),
                check('Flight controls', 'free and checked'),
                check('Flaps', 'check'),
                check('Starter key', 'available (not in)'),
                check('Battery switch', 'on'),
                check('Interior lights', 'check').nightOnly().markCritical(),
                check('Annunciator panel', 'test'),
                check('Circuit breakers', 'check'),
                check('Fuel quantity', 'checked'),
                check('Fuel temperature', 'checked'),
                check('Coolant level light', 'check off'),
                check('Battery switch', 'off'),
                check('Trim', 'check'),
                check('Fire extinguisher', 'check'),
                check('First aid kit', 'check'),
                check('Luggage', 'secured'),
            ]
        },
        {
            name: 'Preflight - exterior',
            checks: [
                check('Tow bars, chocks, tiedowns' ,'removed'),
                check('Fuel level', 'check'),
                item('Fuel filler cap').confirm('in place', 'secured'),
                check('Fuel tank vent', 'free'),
                check('LH static port', 'clear'),
                check('Fuel tank drain', 'perform'),
                check('Antennas', 'check'),
                item('Stabilator').confirm('check'),
                check('Trim', 'check'),
                check('Rudder', 'check'),
                check('RH static port', 'clear'),
                check('RH Flap & aileron', 'check'),
                check('RH navlight', 'check'),
                check('Stall warner', 'check'),
                item('RH landing gear').confirm('check'),
                check('Windscreen', 'clean'),
                check('Fuel filter drain', 'perform'),
                item('Oil level').confirm('check'),
                check('Exhaust pipe', 'check rigid'),
                check('Engine cowl attachments', 'check'),
                check('Propeller', 'check'),
                check('Spinner', 'check'),
                check('Air inlets', 'clear'),
                check('Gear box oil level', 'check'), // Half of the inspection glass
                item('Nose gear').confirm('check'),
                check('Canopy', 'clean'),
                check('Pitot tube', 'check'),
                check('Taxi and landing lights', 'check'),
                item('LH landing gear').confirm('check'),
                check('LH navlight', 'check'),
                check('LH Flap & aileron', 'check'),
            ]
        },
        {
            // Personal addition
            name: 'iPad startup',
            checks: [
                check('Aerolync', 'flight started'),
                check('Headset', 'on & bluetooth linked'),
                check('SafeSky', 'OO-VPE Take-off'),
                check('SkyDemon', 'Go Flying (GDL90)')
            ]
        },
        {
            name: 'Before start',
            checks: [
                check('Flightplan', 'filed').nightOnly(),
                check('Documents', 'on board & checked'),
                item('POH').confirm('within reach'),
                check('Seats & Belts', 'adjusted & locked'),
                check('Canopy', '(partially) closed'),
                check('Parking brake', 'set'),
                check('Flight instruments', 'check & set'),
                check('Electrical switches', 'off'),
                check('Avionics master switch', 'off'),
                check('Alternator CB', 'in').markCritical(),
                check('Alternate air', 'check & closed'),
                check('Other circuit breakers', 'in'),
                check('Fuel selector', 'on'),
                check('Flaps', 'check & set'),
                check('Battery switch', 'on'),
                check('CED lights auto test', 'monitor'),
                check('Navigation light', 'on').nightOnly(),
                check('Starter switch', 'off & key ready'),
                check('Fuel level & temperature', 'check'),
                check('Annunciator panel', 'test, set day/night').markCritical(),
            ]
        },
        {
            name: 'Engine start',
            checks: [
                check('Electrical fuel pump', 'on'),
                check('Strobe light', 'on'),
                check('Thrust lever', 'idle'),
                check('Master engine switch', 'on'),
                check('Glow lights', 'wait until off'),
                check('Propeller area', 'clear'),
                check('Starter', 'engage'),
                check('Oil pressure', 'check green'),
                check('Alternator', 'check 14V').markCritical(),
                check('SkyDemon', 'log engine on'), // Personal addition
            ]
        },
        {
            name: 'After start',
            checks: [
                check('Electrical fuel pump', 'off'),
                check('FADEC backup battery', 'test').markCritical(),
                // item('FADEC BACKUP BATTERY CHECK').markCritical().asSection(
                //     item('Alternator').confirm('off', 'engine must operate normally'),
                //     item('Battery').confirm('off for min. 10s', 'engine must operate normally', 'no red FADEC lights illuminated'),
                //     check('Battery', 'on'),
                //     check('Alternator', 'on'),
                // ),
                check('Avionics master switch', 'on'),
                check('Annunciator panel', 'check all lights off'),
                check('Engine instruments', 'check'),
                check('Vacuum gauge', 'check'),
                check('CED caution light', 'acknowledge and off'), // This is the warm-up!
                check('Attitude indicator', 'align'),
                check('Directional gyro', 'align'),
                check('Radios and navaids', 'on & set'),
                check('Taxi light', 'on').nightOnly(),
                check('Landing light', 'on').nightOnly(),
            ]
        },
        {
            name: 'Taxi',
            checks: [
                check('Brakes', 'check'),
                check('Flight instruments', 'check')
            ]
        },
        {
            name: 'Engine run-up',
            checks: [
                check('Thrust', 'idle'),
                check('FADEC self-test', 'perform').markCritical(),
                check('Thrust', 'max'),
                check('Power test', 'check >94%, 2240-2300rpm'),
                check('Engine instruments and voltmeter', 'in limits'),
                check('Directional gyro', 'align'),
                check('Thrust', 'idle')
            ]
        },
        // {
        //     // Based on RAAC Checklist - but split in 3 parts
        //     name: 'FADEC Self-Test',
        //     checks: [
        //         item("FADEC Self-Test").markCritical().asSection(
        //             check('Power lever', 'idle (both FADEC lights off)'),
        //             item('FADEC test button').confirm('press & hold', 'until completed'),
        //             item('Both FADEC lights').confirm('on', 'RPM increases'),
        //             check('FADEC => B', 'FADEC B light on'),
        //             check('FADEC => A', 'FADEC A light on'),
        //             item('During test').confirm('propeller controller is exited', 'RPM decreases momentarily'),
        //             check('FADEC A light', 'off'),
        //             check('RPM back to idle', 'test is completed'),
        //             check('FADEC test button', 'release'),
        //         )
        //     ]
        // },
        {
            name: 'Before take-off',
            checks: [
                check('Engine run-up', 'check performed'),
                check('Seats & belts', 'locked & tight'),
                check('Flight controls', 'free and correct'),
                check('Electrical fuel pump', 'on'),
                check('Fuel selector valve', 'on'),
                check('Flaps', 'set'),
                check('Trim', 'set'),
                check('Parking brake', 'released'),
                check('Canopy', 'closed & locked'),
                check('Departure briefing', 'reviewed')

                // Departure briefing includes:
                // Engine failure before take-off -> throttle idle & stop
                // Engine failure after take-off
                //   Best glide 78 kts
                //   No turns below 800 ft
                //   No turns more than 30 degrees left or right
                //   Nose in the wind, which is left/right
                // Normal procedure
                //   Rotate at 57
                //   Climb at 65 (until 10000 ft) -> 78
                //   First turn and direction, clearance
            ]
        },
        {
            name: 'Line-up',
            checks: [
                check('Approach area', 'clear'),
                check('Pitot heat', 'as required'),
                check('Landing light', 'on'),
                check('Transponder', 'ALT'),
                check('Threshold elevation', 'check'),
                check('QFU', 'check')
            ]
        },
        {
            name: 'Take-off', // Normal take-off!
            alternate: 'Approach',
            checks: [
                check('Engine parameters', 'check'),
                check('Airspeed indication', 'check')
            ]
        },
        {
            name: 'After Take-off',
            checks: [
                check('Brakes', 'apply'),
                check('Engine pressures and temperatures', 'in limits'),
                check('Electrical fuel pump', 'off'),
                check('Taxi light', 'off').nightOnly(),
                check('Landing light', 'off'),
                check('Flaps', 'up')
            ]
        },
        {
            name: 'Approach',
            checks: [
                check('Directional gyro', 'align'),
                check('Altimeter', 'set'),
                check('Landing light', 'on'),
                check('Taxi light', 'on').nightOnly(),
                check('Electrical fuel pump', 'on'),
                check('Engine instruments', 'check'),
                check('Approach briefing', 'review')

                // What constitutes the approach briefing ?
                // Runway in use ? Approach clearance ?
            ]
        },
        {
            name: 'Landing',
            alternate: 'Approach',
            checks: [
                check('Approach area', 'clear'),
                check('Brakes', 'apply'),
                check('Flaps', 'set')
            ]
        },
        {
            name: 'After landing',
            checks: [
                check('Electrical fuel pump', 'off'),
                check('Pitot heat', 'off'),
                check('Landing light', 'off').dayOnly(),
                check('Transponder', 'standby'),
                check('Flaps', 'up'),
            ]
        },
        {
            name: 'Shutdown',
            checks: [
                check('Avionics master switch', 'off'),
                check('Thrust', 'idle'),
                check('Engine master switch', 'off'),
                check('Electrical switches', 'all off'), // Includes landing light and taxi light
                check('Flaps', 'down'),
                check('Battery switch', 'off'),
                check('Starter switch', 'off & key removed'),
                check('Parking brake', 'as required'),
                check('Trim', 'neutral'),
                check('Control lock', 'as required')
            ]
        },
        {
            name: 'iPad shutdown',
            alternate: 'iPad startup',
            checks: [
                item('SkyDemon').confirm('log engine off', 'back to planning mode'),
                check('Headset', 'off'),
                check('SafeSky', 'flight closed'),
                check('Aerolync', 'flight completed')
            ]
        }
    ]
}
