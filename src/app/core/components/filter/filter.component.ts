import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  nexttabflag:boolean=false;
  public rowSelection:any;
  public columnDefs:any;
  public rowData:any;
  public defaultColDef:any;
  public gridApi:any;
  public gridColumnApi:any;
  public modules:any;
  frameworkComponents: any;
  public rowHeight:any;
  public headerHeight:any;
  paginationPageSize: number;
  paginationNumberFormatter:any;
  constructor() { 
    this.columnDefs = [
      { 
        field: 'modified_by',
        headerName: "Modified By",
        width:140,
       // menuTabs: ['columnsMenuTab'],
        suppressMenu : true,
        suppressSorting : true
      },
      { 
        field: 'modules',
        headerName: "Modules",
        width:140,
        suppressMenu : true,
        suppressSorting : true
      },
      { 
        field: 'action_taken',
        headerName: "Action Taken",
        width:270,
        suppressMenu : true,
        suppressSorting : true
      },
      { 
        field: 'plateform',
        headerName: "Plateform",
        width:140,
        suppressMenu : true,
        suppressSorting : true,
       },
       { 
        field: 'ip_address',
        headerName: "IP Address",
        width:140,
        suppressMenu : true,
        suppressSorting : true,
       },
       { 
        field: 'Device_Name_Version',
        headerName: "Device Name",
        maxWidth: 195,
      suppressSorting : true,
        suppressMenu : true,
       },
       { 
        field: 'location',
        headerName: "Location",
        width:140,
        suppressMenu : true,
        suppressSorting : true,
       },
       { 
        field: 'date_time',
        headerName: "Date & Time",
        width:170,
        suppressMenu : true,
        suppressSorting : true,
       },
           
  ];

  this.rowData = [ { modified_by:'Vivek',modules:'Price Setup',action_taken:'Shutter Makeup has been changed as dis',plateform:'Disktop',ip_address:'192.32.12' ,Device_Name_Version:'Chrome 86.123', location:'chennai ,india',date_time:'24-06-2021 12:46:24',},
      { modified_by:'selva',modules:'company profiles',action_taken:'New company has added in company profile',plateform:'Android',ip_address:'165.58.65' ,Device_Name_Version:' Android 9 pie', location:'Los angels ,USA',date_time:'04-12-2020 02:06:55', },
      {  modified_by:'kumar',modules:'Calender Setup',action_taken:'Follow Up status has add  in calendar',plateform:'Ios',ip_address:'158.24.12' ,Device_Name_Version:'Ios 12.4', location:'New York ,USA',date_time:'12-07-2021 20:45:35', },
      { modified_by:'Vivek',modules:'Price Setup',action_taken:'Shutter Makeup has been changed as dis',plateform:'Disktop',ip_address:'192.32.12' ,Device_Name_Version:'Chrome 86.123', location:'chennai ,india',date_time:'24-06-2021 12:46:24',},
      { modified_by:'selva',modules:'company profiles',action_taken:'New company has added in company profile',plateform:'Android',ip_address:'165.58.65' ,Device_Name_Version:' Android 9 pie', location:'Los angels ,USA',date_time:'04-12-2020 02:06:55', },
      {  modified_by:'kumar',modules:'Calender Setup',action_taken:'Follow Up status has add  in calendar',plateform:'Ios',ip_address:'158.24.12' ,Device_Name_Version:'Ios 12.4', location:'New York ,USA',date_time:'12-07-2021 20:45:35', },
      { modified_by:'Vivek',modules:'Price Setup',action_taken:'Shutter Makeup has been changed as dis',plateform:'Disktop',ip_address:'192.32.12' ,Device_Name_Version:'Chrome 86.123', location:'chennai ,india',date_time:'24-06-2021 12:46:24',},
      { modified_by:'selva',modules:'company profiles',action_taken:'New company has added in company profile',plateform:'Android',ip_address:'165.58.65' ,Device_Name_Version:' Android 9 pie', location:'Los angels ,USA',date_time:'04-12-2020 02:06:55', },
      {  modified_by:'kumar',modules:'Calender Setup',action_taken:'Follow Up status has add  in calendar',plateform:'Ios',ip_address:'158.24.12' ,Device_Name_Version:'Ios 12.4', location:'New York ,USA',date_time:'12-07-2021 20:45:35', },
      { modified_by:'Vivek',modules:'Price Setup',action_taken:'Shutter Makeup has been changed as dis',plateform:'Disktop',ip_address:'192.32.12' ,Device_Name_Version:'Chrome 86.123', location:'chennai ,india',date_time:'24-06-2021 12:46:24',},
      { modified_by:'selva',modules:'company profiles',action_taken:'New company has added in company profile',plateform:'Android',ip_address:'165.58.65' ,Device_Name_Version:' Android 9 pie', location:'Los angels ,USA',date_time:'04-12-2020 02:06:55', },
      {  modified_by:'kumar',modules:'Calender Setup',action_taken:'Follow Up status has add  in calendar',plateform:'Ios',ip_address:'158.24.12' ,Device_Name_Version:'Ios 12.4', location:'New York ,USA',date_time:'12-07-2021 20:45:35', },
 ];
  this.defaultColDef = {
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    flex:1,
    editable: false,
    resizable: true,
  
    //minWidth: 100,
    //width:120,
  };
  this.rowHeight = 30;
  this.headerHeight = 33;
  this.rowSelection = 'multiple';
  this.paginationPageSize = 10;
  // this.paginationNumberFormatter = function (params) {
      //   return '[' + params.value.toLocaleString() + ']';
      // };
  this.frameworkComponents = {
    //customCell:CustomcellComponent
    //  buttonRenderer: RestorebtnrenderComponent,
    // checkboxRenderer:FromemailbtnRenderComponent
  }
  }

  ngOnInit(): void {
  }


  onEditButtonClick(params: any,e: string)
  {
    //alert(e);
    if(e =='edit')
    {
      
    }
    else if(e =='copy')
    {
      
    }
    else if(e =='delete')
    {
      
    }
    
    //$('#emailsettingModal').modal('show');
  
  //  this.api.startEditingCell({
  //     rowIndex: params.rowIndex,
  //     colKey: 'make'
  //   });
  }
  onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onPageSizeChanged(event:any)
  {
    var value =(<HTMLInputElement>document.getElementById("allactive-size")).value
    this.gridApi.paginationSetPageSize(Number(value));
  }
  onPaginationChanged(event:any)
  {
    console.log('onPaginationPageLoaded');
    if (this.gridApi) {
      gridsetText('#allactiveCurrentPage', this.gridApi.paginationGetCurrentPage() + 1);
      gridsetText('#allactiveTotalPage', this.gridApi.paginationGetTotalPages());
    }
  }
  onBtNext()
  {
    this.gridApi.paginationGoToNextPage();
  }
  onBtPrevious() 
  {
    this.gridApi.paginationGoToPreviousPage();
  }
  }
 

function gridsetText(arg0: string, arg1: any) {
  throw new Error('Function not implemented.');
}

