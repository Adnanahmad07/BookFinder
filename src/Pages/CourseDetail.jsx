import { Book, BookUser, Clock, Group, GroupIcon, LineChart, Package2Icon, Percent, ThermometerSnowflakeIcon } from 'lucide-react';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Course from './Course';


const courses = [
    {
        id: 1,
        title: "Course 1",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 2,
        title: "Course 2",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 3,
        title: "Course 3",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 4,
        title: "Course 4",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 5,
        title: "Course 5",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    }, {
        id: 6,
        title: "Course 6",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Excepteur sint occaecat cupidatat non proident, Lorem ipsum dolor sit amet, consectetur adipiscing elit sunt in culpa.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 7,
        title: "Course 7",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 8,
        title: "Course 8",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 9,
        title: "Course 9",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 10,
        title: "Course 10",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 11,
        title: "Course 11",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Excepteur sint occaecat cupidatat non proident, Lorem ipsum dolor sit amet, consectetur adipiscing elit sunt in culpa.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 12,
        title: "Course 12",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Excepteur sint occaecat cupidatat non proident, Lorem ipsum dolor sit amet, consectetur adipiscing elit sunt in culpa.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 13,
        title: "Course 13",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 14,
        title: "Course 14",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 15,
        title: "Course 15",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 16,
        title: "Course 16",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 17,
        title: "Course 17",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Excepteur sint occaecat cupidatat non proident, Lorem ipsum dolor sit amet, consectetur adipiscing elit sunt in culpa.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
    {
        id: 18,
        title: "Course 18",
        image: "https://via.placeholder.com/200",
        duration: "40",
        description: "Excepteur sint occaecat cupidatat non proident, Lorem ipsum dolor sit amet, consectetur adipiscing elit sunt in culpa.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor ex at felis placerat, et tincidunt nunc auctor. Suspendisse potenti. Mauris varius nisl vel dui suscipit, nec eleifend ligula tempor. Etiam et arcu vitae arcu elementum luctus non ac ante. Curabitur sagittis, sapien at dignissim porttitor, dolor erat vestibulum orci, in fringilla nisl elit eget mauris. Quisque suscipit, nisl vel condimentum vehicula, libero eros fermentum libero, vel malesuada lectus justo ac ligula. In vel vehicula arcu, at pharetra augue. Sed vehicula, nunc ac molestie tincidunt, dolor est vulputate orci, ac ultricies nisi nunc nec tortor. Fusce et interdum turpis, in consequat purus.Proin sit amet augue ligula. Mauris sed suscipit lectus. Sed facilisis tortor et quam pellentesque vestibulum. Phasellus et arcu vulputate, fermentum ipsum a, porttitor risus. Nullam vestibulum suscipit purus non accumsan. Vestibulum nec arcu et libero hendrerit vestibulum. Suspendisse potenti. Nam venenatis magna eu risus varius, ac vehicula mi suscipit. Integer ac metus urna. Vivamus cursus ullamcorper erat, ut laoreet libero sagittis sed. Duis vestibulum neque non sem volutpat, sit amet ullamcorper dolor porttitor. In semper tincidunt metus, et vulputate tortor condimentumsed.Cras auctor urna at libero viverra, non facilisis nunc feugiat. Donec porta risus in arcu malesuada, at fermentum metus convallis. Etiam scelerisque arcu vel ex feugiat, a dictum risus tempor. Aenean sit amet magna non arcu ultrices lobortis sit amet sit amet sem. Phasellus aliquet mi ac arcu vestibulum sagittis.",
    },
];

const CourseDetail = () => {
    const { id } = useParams();
    const course = courses.find((course) => course.id === parseInt(id));

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="course-detail md:flex md:gap-x-7 py-24 justify-center xl:px-12 px-6  dark:bg-custom-course-black dark:text-neutral-200">
            <div className=' flex-1 mb-12'>
                <img
                    src={course.image}
                    alt={course.title}
                    className='md:w-1/2 w-full mb-8 rounded-3xl'
                />
                <h1 className='font-bold text-3xl my-3'>{course.title}</h1>
                <h4 className='text-2xl font-semibold my-2'>{course.description}</h4>
                <p className='text-justify'>{course.details}</p>
            </div>

            <div>
                <div className='min-w-80 xl:min-w-96  rounded-xl shadow-2xl dark:border border-gray-800 h-fit py-10 px-6  '>
                    <h3 className='text-3xl font-bold text-red-500 mb-4'>Material Includes</h3>
                    <ul>
                        <li className='flex gap-x-2 py-4 border-t border-gray-200 '><Clock /> <span>Time Duration:</span>{course.duration} Days</li>
                        <li className='flex gap-x-2 py-4 border-t border-gray-200 '><Book /> <span>Reference Guides</span></li>
                        <li className='flex gap-x-2 py-4 border-t border-gray-200 '><LineChart /> <span>Student Login</span></li>
                        <li className='flex gap-x-2 py-4 border-t border-gray-200 '><GroupIcon /> <span>ISO Certification</span></li>
                        <li className='flex gap-x-2 py-4 border-t border-gray-200 '><Percent /> <span>Pre-Placement Training</span></li>
                        <li className='flex gap-x-2 py-4 border-t border-gray-200 '><Package2Icon /> <span> Best Infrastructure</span></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default CourseDetail;
