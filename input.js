/*
项目():http://f.qiantwx.com/r?p=wLfc
邀请码:6546824

绑定后可以微信扫码获取变量,不一定能可以

注册登录后:福利--上面秒到支付宝--点一个红包看完视频授权支付宝--填脚本变量跑脚本
抓包http://app.huluzhuan.com/user/loginByWx
微信授权找到抓包那条连接
再响应里面找数据（登录成功后返回的数据）
appKey、utdId、sign这3个值
变量名 soy_hlxq_data
变量值（用&连接）：appKey&utdId&sign
多号 @ # 换行
*/


const $ = new Env('葫芦星球');
const author = '作者TG_ID:@ls_soy';
const notify = $.isNode() ? require('./sendNotify') : '';


var version_='jsjiami.com.v7',_0xe79c=(function(){return[...[version_,'wwjdsrwjCNidCpaGmuipT.cKSoDmu.dxvxL7ngub==','W7aTWRGula','WPlcI3yhWP8','5O+r56A8kcH26lA05y6AWOe','WOrtA8oKWRS','WQxdKvZcQG','WPrYkZhdVW','WR/cVmkdW6tcTW','W5hNNjRLU6pLKBhJGQHzcUI9J+wzKSkO','W7pdUqfVhCk7WOm','W7FKUzVOTBNLJ6pJGPBcSNVcNa','ACoDWPbLWOf5','WQZdMX3dP8oA','WRXTamoDW48','atNcGxbQWO0','nW4M','W63cIIPNWPVdTGxdUW','WR5uhmkJW4ddSa','WQPqcmkbW4e','oL/dH2b+W4hdGSkj','W7NdImkCWPXe','W6FcMYO0WQZcOd7cKbG','W4RcScWGkG','eeRdRmkuWPm','v8kQA0/cPq','WPH/W7HEW4eSta','oHCIW6lcUq','WPjWW6HyW5e','W4WEW63dNIG','zSkYWOldGGy','boodLUIhQ+AEIoAoUEEMIEoaGo+/MEs5VEs+G+wqOEEwQUw/NEs/RUAlOEEIOoAsVos/Rq','WPhJGy/LVjJKV6VNMBRPMlhJGPS9WOdLPzhOTQ0','W6BcGdK','WRv0WRD/gW','W6OvW6Dtrq','oCkyW5C9W5CYzSoWu8kwW4FcS3m','WO1TlSk3WRu','peBdJu8','oa4LW4u','BmoxAMqR','pwVdO1nz','WOdMIPhKUzpLIjRKVANOT45rW7jrW7T2WP1lWPRORy7OHOJOORtLROxOO6X3','f2tdKCkyWPC','p8o8gsBdSUIgToADLoAlSEIIQL/cPtFLJzJKUQlMLRFPLQ7VVOi','cf/dJSk4WRu','BEoaN+IhGEAFG+AnS+ELK+obKo+9MoATLUIgGoAEKowmJUIdMUMEVUM/MoEnN+wITUI2Qq','gHa7W43cOW','WRiFkq','oSkZzNJcKmkKyua','W6VcJd11WOFdSrBdVq','yUobMUw9OEs/VUEzTEMARUobQSolyUI/QEwzRse','WQGcgSoVomksuCoL','BCoPyG','lW4nW4/cI8kse8kJmCk1W53dTJ1J','lJq2W7JdGW','WQtcK2e','pSkUW6qhWPC','oL/dH2b+W4hdGSkjsG','lqSIW7BdPa','CEoaV+IgUoAFVEAmKEELQ+ocJU+8GUwpToMgTUwmTUAwVw3dJJanW7XNW4/dREoaISoNsCkWW401W7/JG5VcOCoNW4dcLKxKU63PVlFLHOW','WOtdJuRdL8oPEwKxWOfu','WPbFh8oLW55QdmojaXu','o8k9uSoyAmoBW6xcVW','W6Ctw8o4WPtcSe7dHtvOWOBcNcS','WOLdbc/dOq','sCoyWRfCWPm','W53dT8oWW5CG','vCoOjSkBrG','W5FcOmkeW7tcO8kf','E8ocn8osla','W6ldJSotW7G','5O6A56EAwmo0WOhOTzZLJjJcMq','WP7cO8kiW73dO8opEIlcQ8oVcexcGmo1WOinACkr','W4hJGjdLVO/KVyRNMQlPM7JJGzr/FUAjQUwlGW','WOazm0ZdGq','WOz0W65CW6m','FmogWQpcQCkPWO4','gL/dKSkAWQqO','k8kqbCksW4Kd','h+ocOEIgJEADQ+ApLUELJUoaTE+9L+AZG+AFJoImQEwmJowkOEI1NEwpLEAuJUAnHq','WQyLWRa+','W5ODW7Lewq','aZ7cU0a3','i8kvW4G1','W7ehoMBdTmoMkCopbGlcPLm','AoEDM+w5K+wrK+oaT2Ly6l2y5zQfWRu','5O6R56svWO/dVmoS6lw35y2Ooa','kIzoCeC','v8oqW6qImea','W5G3WQi','jd9l','W7RcJCkRWRldLa','W7FNU5pLJzRNIQlMGOBJGP58WOhOV6/LM67cVG','WRWItt9k','5O+M56sVaCkcW7/OTjBLJ5JcQG','ymorFw4W','WOXlhflcHmoRW4a','WR3cP8k1W7tcQq','zCoNCwq','BCoiWO5HWPq','W7hdLmoeW7u','W5ZdHCkf','W7xdNSouW5GgEYldGW','W5VdSHBcPLW','bcxcQa','WPFJGzZcVXG96iAE5P2P5PAz5lM25yEt6lwE5Acl5PIO44kN77YlW5NJGAVMNB7KUklLUBRLJ7FLUABNMOpOHBRMN6BMLjNKUkBLJ7pLH5VKUyFMT6BLJ6FNMB7KU4xKVl/OH4FMNy/VVPlKUl7NLRtKUkZMTQ3OR6dLKytLR5xKUjRNO5lNQ7pVVBBNPRZMRy/NLzBKUiJLLjFKUyZMIPRPNPlMS6dNMBJNM6hVVR3VV5xLKkVLIzBLKlhMNldOHjtOTOFJGAZcM+oaVUs4PEIaQEs9H+ITK+weREwrRUAZLoAbT+oaL+wfQUEJLUAdJUocP+wSVEAvHEAcQEwtSoACVUAvTEAaRU+8NUISR+AHU+AmNUAaOowfNoIhHEIIR+wjPEAwSUobUbhJGzlMNOlOHzRMNkZMLQ3KU7VVVkNNPPxMRjpKUi3KVQ3LHl3KVQdLJ5ZJGQ3ORzFLNyhJGi3NVz7KVQtKUQ7LJllKU7FKV5lLV7FLVR3NMlFOVPlOVQNJGj/LJkFLU7Wt5zgY5yMh5zc45P6o6iEo6lwB44c/W5RJGRpMNlBKUBdLROVKURZKVzNOHk/MN5hPLBlPO7hMPylKUPJOTzROTkpVVztLJklMIy3KVQJKUlNPMjBKUOtNL5tKUzlKVzFOHzNMNRlPLB3ORl/LR7ZOHilNMOxKUOJKVPxMJBRLPl7MIzZMJlpLRlVJG6ddIEobHoEyOoAmOUAkMUMwQ+AoL+s9IoExUoIgMoACHoEyNEs7JUs8NEEuM+AjG++9V+wpU+AjQUs9Hos7UoMyMEs7UUs5JUAnL+AjNUwgR+s5MUAFKUs7VEIJUEs4UoI8IEwnGEwBMEwTQmk55z645yYW5Roj5B2x5OIv55Mq5ywN5Rcx6kE/55MJ5OkA5yEN5lQB6l2U6kgR5l+j5Pga77Y+5P6T5lIO5A2E5lIx55A65QYH5BYl6lE155Mx5lIY5l2O6zIt56E95Rgo5R+V5OQE5yA65lM65zcl5P++5QAG5lIb6lE66lsr44g6WQVJGzNLPORMNjxKUyRKVBJLJllKVjZMIlVKU4BKUANORyJKURtOR67OHQNMNR3LJBlOGO3MTR7LQAFKVjVNIj7LHQtMN6NLI5JVVBZLIOFLUQhLJOVMLzZPG4tNNltLUzxMJzVKVR7OU4lKUkdOR47MMkxJGlFMI6ZMNiRMNytOR5pMM57VVRNMIOZKU7dLS4RLN7dMLApLI5JOR6NORlNMLjtKUQpLKiBLIzlPMz3NMBJLHipOHRNMN7lJGQpdMoodNos6I+s9GEs6I+s5LEs/OUAxJow/R+AFOoEEQUASSoMIIUEzQ+EBMEs7O+AkV+EzIEAmOoAkJUMwM+AoUEs/N+EvGoIUMEs7P+w7MUEAKUs4REs8MEIgJUADQUEyJos8I+ExLEIdH+MaPEw7MUs7PoE5UEMzIoISLEAVL+wGQoAAQooaJEADJos7H+s+HEEvQEMBNEAxHEAyPoAxOoAiUEIJR+whQ+AUL+weNoI2K+wJTEAyNUEAQoADKUwjREobTos5REAwSUs/UEEwHEw4OUwLI+wjKUs7PEs5OUs9NEEBU+whL+IhOoACIUAkM+s7N+w4JEAuS+s5O++/HEwjJUIMLUs6JoAcK+w2LEAnHEwpT+AUSowgTUI2VUwHU+AAOUocKW','W4mPW7jOtq','wmkGuhJcUG','W5ajBSoNW6XxB8oXW6CsWR3dIG','W7W+WR0ehq','vmoYyZ0','W7dcSsu','DSoBcCogkq','W7pdLSoJW4CL','uEobSEw/R+s9GEEAK+MATEobRSo8qUI8LEwzSCk/','W53JGAf75PI75zkH5OUK56gh44kWardMLB7MSR7OJlpLJj7LIkpMI4FNO53MLOBMJAO','5O2n56w2W6fAAEI2OUwoSJ4','W7m5WQe','W5hNNjRLU6pLKBhJGQHzcUImRow8MW','gSkmq0VcQW','WP7JGQlLVztKVy/NM4xPMyJJGBddJSkg5AsQ6lA1','heRdLSkvWQaLW7O','WRtdImojW7ChmW','jrtcHwKh','WPTvda','W7BdTHj8cG','W6FdLmkFWQ9S','WRTHrq','WRWIwW','BCoGCmoGrSo8W4m','WQn0vCoBW6pcKwOKlGPYrriRCgCzvmkewCoBW4LFEHdcU3H4smoiW40PWPFcP1RcMhvUFHRcRGHlhSoAWO3dLSostIvJW4RcHSkRwCk3oa','lSkAW5GXWOFdSJ8','hYyjW57dPq','W6uCWRWAnW','WQyjcSohl8kZqW','W6FdGSkwW4FdIG','WO/dIfBcSdO','zmkJWQhdIr4','W5BcSmkQWQ/dPcW','v8ovW7yHDG','WQGeuqfy','WRVNU73LJRpNIRZMGidJGABcScFOVBtLMR7cQa','b8ktzwlcHW','W5ldVSk7W5/dJq','W7tdTIjCma','WOzWW7vp','W6NJGRJLVPdKVBVNM7VPMzhJGi1zW4tLPjBOT7q','xMfyW5/cOqOaWQuLW6XBWRddNCk3WO11eSooW4VdUbLHW49lWR/cHSo5W5jZWRxcMbZcQ8oqq1nbpHbOqbmcWO0qp0NcS3ZdLSoBBSk8BvlcQX5oW47cNH3dTqbNdwxcIG5MWRBcILldMColWR9xkHBdL8o6g8oKlCkOWOaXW5NcSWNcU8kmWR0WfSokW4KhbmktWQCBxXSTddFcI8oGwLGKW6hdQmozW6iAWP8eW57dTCo6FJvOW6FcMLi8qIX4W47dK8oPWRRdHSoqlK7cJeldN8kqWR3dMSkzqSk/WRC','qmoQyNddIW','r8obmq','nJaUW4hcMa','W74+WRuhmmoRAhtdSW','W4OoWQaUlq','BCkpvftcTG','W47dOmkDW6BdJW','W51myINJGPFLH75M','WOdJG7/KVilOGk/MJktNPQlJGAdVVONPQQxORzpOHipMN4i4W77dUowLK+I3NsdOR57LIOlKV4tMLihOHzpMN4dKUjRKU5RMHjVLHQBLR5BdPa','W7hdNmkz','W7OAW4ldVbC','WRZcNSkCW6xcMa','WRWDeehdTG','lHiKW5lcOCkx','W5RcKCk1WQxdSq','W6/cGsG','vSouW7qUza','qCoQWQncWOi','f8kMW7OMWPO','pXaWW57cGeS','ACoSDmoCsSoJW5lcGSkDW6i'],...(function(){return[...['umkVuG','eSkaW5PS','W5eHWQevfa','WPtdHuBdUmo6','WRtcIh4LW6tdRG','W4dcOCkZWRa','ySkJWP/dGX3dMW','WPnKW5fXW5m','WQtcISkmW73cGW','WRPRWPvLpa','hXxcU1a0','WPDihYxdHSoEWO7cTY9VWQNdMxm','psnjA283','ACozWOdcTSk+WP4KWPa','z8o1eSkdFq','W67cVXiMaa','WORcRNOxWO8','WRTHu8oyWRW','W5mlzmoHW6TFpmooW5SlWQNdOCkQ','smobrKK9','WOKeCc1b','WRZdNaNdMSozW47cM0tdUmoIW4eNW7G','W5uiW71GAq','WP1+iCkmW58','aIezWP3dOWjQW4iDW59PWRi','WPHoWQPco8oqFW','huBdJmkWWQ09W6y','WO9jma','wmojo8knra','WRVcOCk3WP0R','A8ogkmoneW','WR5kbSogW50','FSodjmoEfa','dMpcMCk3W7C','WRHjW7HQW6G','f8kAW6qmWOW','WP/cNmkfW5lcUq','W4LbW6LkW58OEG','zmoib8ktzG','yCkgW5iWW4i','W7FdOWxdTmoxW6NcSW','WPO8lMldKG','WO/dH1K','laaOW5q','k8kqbCkYW4Kd','WPHoWQO','dq8VW4VcUW','EoobRow9H+s/KoEyUUMzKooaVSkXDEAkPEwjHG','WPDxmCkvWQO','FmoPhSk7vG','zmoOCW','W7KCW7a','B8k2WOhdIaddKhdcTY7cJgdcRqSIW73dLGBcNepcPmo4WRRdTSk6WRbYC8o4W5/cLIldUaVdTCoGW7nIW4hcQSoBuCkerSo7WPSJW6Se','WPT6qmoMWOS','WPquph3dPq','WOlcG8koW4VcLq','dr4WW48','W7xdNSouW50aycxdHmoeW44','FCk2WP3dJr0','WRJcV8k+W7hcRG','E8oyWOj9WPbYn8o5tG','AmoFm8oHcG','W5VdKbNcN2q','WQtcP8klWQS','WQvcm8kyWRG','W7VdRWXLfG','W5JdVZRcLuq','W4xJGBFOHBtMNO7MJOFNP4BJGltVVPFMRB/OHkpMN5tLJA3OGzBPNAJPV4lNJjlLOAhOTlm','W4hdKCkgWPu','W543W5BdQbS','ma0oW7xcMq','uEobSEIfM+AEJoAmUoENIEobRU+/NoAZG+AFIoImMownIEwjO+I0OUwmU+AvG+AnLG','W6hdJSocW6mDFdNdNSog','W5aaW5BdJJq','W67dMSkAWPCMWOn2na','EmoyWRdcSmk1WOC+','CmoFW7q','W7BdSGTTeCkC','pCk6W5uKWRi','WQi2uG','WQ/cICkPWQSi','W7tcRSkGWQ/dIW','E8oxda','WRiMWRuzlG','W5ldJmkyWP9U','cSkBW4y9WPpdKtGAA8okeSotW7GMsCkyzCoGgmklW5RcJSkvbetcS8kWv8kZySk6WRFdJe4dW6tcR8kxeq/cUCoaemkeWQxcNtSJj3m6vmousw8pWQBdM8o/W6/dJYJcHCoYvWFdLmk8C14yW4KPW4ldHmkId8o2WRdcUCkhzCk7ymkEmfVcT0bGmCkZW6NdJJvhpSkBW6ORWOxcHdldImkoxSktr1G2hGNcGmofCeBcUSoEzvG2qqFdOg7cRgvOWQmID8kTf8kyh0HFhCkpE8ockmoZW51hgw7dSSknl8otWQe','xSoVBSoUyG','gW/cP14LCW','5O2c56AbWO3cVutOTkJLJQFcKa','W6VcUZaSiW','uCoJmW','W7VJGihLVllKV5RNM4lPMkxJGlVcOCkS6l2C5zUHW5m','WPtcKSkAWQWz','s8ovAxZdNW','W7hdHXlcIfG','qCoLEa','W6hdI8omW7KD','zSoEW64yBHHCpd3cOCo/WQ7dSa','mHipW4/cJmkw','D+obOEAzRowsNEAlNEEHVUobLmkLAoAwMUAYMUIpVEwoO+wkI+AiIoEIHoAvNoAoQq','W6SNWQmrhq','W6tcHCkVWOFdTa','bmoZeZxdOSkasmk4W5C','FCkPWOJdUWhdN2NcSHJcH2/dTHi','W57dIqtcKq','a8krrhRcTW','arpcKg4PELFdUGRdKCk4CSol','B8kote/cKa','cxRcTG','u8o0AfhdLq','WQXucqNdPq','WQ/cIhO','s8o0vmofya','DmoZBge','WPjHW4TzW60','qUobGoAyG+wqV+AjJEEHKUobQCk2E+AvTEAXRoImTUwpKUwjGoAjI+EGMEAwGoAmTG','fEE5O+wmOEEkREAdK+ocV0lcTUI8SUwAOCkO','W53JGAhPNi3PVO3LJz/PHydLKyVJGRabemoTbmo9WPD7W4dcPmkhw8kWhvxdQmoIEUwNS+woKX/MI5hcO+AlKEApJoIGOq','W73cO8kiWPhdSG','WRvZhSoFW40','s8oerCo1BSoqW6FcPSkKW5FdJGaQWP/dNupcHmkZWPDXW6VdJG87','aW8XW4RcPW','fXNcH14X','q2fiW6BcTG','WPz0W6H2W5anx8oVW6NdUW','WP19haNdIa','WQOMAsby','5O6y56wQatql6lw15y6pWQW','A8oVDNhdNCk4rSoZW67cQmkNW64aW4tdV8kQW73dNXKrurX/mmkJWPPDCrhdIqhdKmopdNLNgWLDW4OKW7FdLZ3dVqZcPLfHWQNdKSkNW7TjWQddISk6yIz4whNdJSo2nxGGaqJdNc3dICoIiH9AcNX0WRpdN8keySorEmkCbgaTWPZcL0pcJZpdNvifWRuudKZcU0VcGutdQmo7yCo7W6xcQtRdUu3dGmonWRBcUmoPESkxW40jhCo7W5NdSN7cOcxdV8oTW5JdPmkLW54Jb10tpHddJIn+WQ7dPb4vW7PNW4/cPG','W4tdP8kIW4ldLG','CEoaV8kg6i2M5yYx5lUD57MR56cz44c9q8ou6i265y+A5AAC6lw2','WOH5h8k6WRa','lgRcVSkFWO4OlsTeW78','xvVdI8k8WQqcW6T5qqNdIq','WRJcS24oWRW','hf3dVNHD','nM3dI159','WPHIW5juW50g','W5emy8oRW69Fm8o+W7qBWQddHmkb','5O+h56AcrSoxp+I0RowpRwy','BCo/BCoe','maxcSvqO','FxbjW5/dV3fdW6m8W7K','sH7cKCoIW7DGWQLVyGhcMSkQBG','jSkpeG','W53dJqtcVxHIW5nv','W4xMIjNKUApLIPlKV4ROTQOfW65PqmkiW7pdHbCXW47dGSoo6kYp6iEM6kga5AYl6kg3W5e','cmkSW64NWP4','5OYH56sRWRewWPtOTyxLJ53cUW','WRWxaSoliW','W5BdGCkbWQ5GW5VcLSkrr8oI','i8k8W7CCWOO','rwvaW4BcPG','W6GVW5PJDq','n1NdILH5W4a','FrCKW5lcM8kAemkOx8oZWPFcPW','WPLWWQjkjq','W4tcSmk2WQ3dTq','gJq7W7tcPG','zmocWOC','W7ySW5e','yCkhW5uZWPhcGa','WR4Fo3hdV8oaia','lru2W4xcNG','zCoeW6qV','WPTiWPHmgW','WQBcPSkIWPCp','WQvnkI/dPa','WRKWwJ4aluBdPCoEwrhdRSk2wSk4zSoXn8kexCkya8otWPtdGSoruCoqls8una','WP5DW59CW70'],...(function(){return['WR8ghmormG','ptv2DLq','W7eJWQS','WRhcNCk2','WRDJWO4','WOfvWQLImq','rCkGvMJcTW','W7/NN6pLUQtLKPlJGBZdMItLPzhOT7W','WRtcRCkZWR8V','WR1GbCkgW6y','W7OPWRG6k8oQmxy','lZvytu8+hCo2nmo7W5ZdJMiwu33cHa','xmo0WRxcOCklW5WdWPToW6/dT2pdHauMkfaiCqCIESkfAa','gHq3W6/dNXiG','z8kOWPxdGrhdVhC','W6NdUbXvdCkyWP3dKtjSW7VdQ3G','A8ocWOrR','W5BdMGdcU1W','WQmNWQCaeMzsW48','WQeSwYK','qCodWPLyWPy','W7NcICk1WRWFWO9Tbmk2aSopf1PPWQBcTSklmSkKlmodW5XbwvldVSoAWQNdNWxdMmouW7dcQ8kDW4mBeX/dSMJcLdZdGx3cVCo/CGqhaCktWRmUBCobCJdcHLnBp8kVyMFcOaNdKJBcKwDlc3BdQSksdKFcQNnKW7hcIaZcLN3cJcBdJmo0WQTFn8o0W6/dSqJdI8kEWQ/cUCkskmoWlHhdKJxdM8k5WPddRSk6iZtdImoVyCk3W5tcKWtcGSk5dmkHkG','fhVcQCkgW40okcrl','WPJJGQVLVi7KVBhNMjlPMyJJGyhcISkb5AAm6lss','WOdcNmkJWPfcW7lcUSkN','f+ocPUw9VEs8O+EAT+MASEobM8onbUI9REwzVrm','CmocaSkk','WPZcQSky','W6/NNRJLUi/LK4/JGQdcMmod5Ase6lAc','WQLHiGddQq','kmknu0lcUa','ymopvCoTzG','BEoaN+MEIEM9TUwnU+MgPUwrJoobKWJcUSopWOTEWRmPWPXncCkqW7W6W4NcSbTL5AE75y2lWQdMI5FdPUAkMEAmPEIGRq','vmkuWPBdRbG','W4BJGzpOHkxMNAdMJ7/NPAlJGktVVPRKUPBKVA7LKz/NLRlLVBVKV5pMIOxNOi7MKzJKVi4','e8k1txBcT8o9dmo3WOSpWRu','cMRdHuL8','W7BdUai','W6yAW7ddTq','W4hMIB7KUkZLIPVKVytOT6HLjcytm15hA+IVSUIhT+IGVEwUQoIGOd0','WOj+W6vKW5epuSoQW5pdRf7cHYC','W5tdUCo5W7eB','fxJcNCk7W5O','WOLgeHNdHG','W6G6W5HUtXJdVM7dHHK','EmoyWRa','j8kvbmk7W7u','WRzPeI3dHq','WO5dimkgWO8','CEoaV+AAJEwtT+AkQUEHKoocJIim6i+o5yYI5AE86lsPWOhORQtPHP/ORzO','CCoPdCk0sa','W77JGlhOJBRLJ73KU5NNUBVNOiRJG67dNx/MIi/LI5pOJOtLJ7/KURRNUj3NORfXgs8XDCocWP9hW4mqt3buAcpdNdHXk8oyyvpcKSkFW7/dOmkrwvP+WRpcQmk7CuxdLxtdN8odW7xdRSoVWPyE','zN5pW5ZdPq','W5tdPXJcSwm','BCkPWPxdGq','W4BdHCkCWOK','WO1vmtJdRa','W5yyW4XUrq','lgxdGKP7','ySoIswGT','WPzwbW','Amk8WPRdOdK','CSo/tmoLsW','WPZdKfBcIc8','uvfMW63cHW','WOzPW4nEW4SrsCo0W6JdRqldH3yD','WQpcI3uOWR8','W5xcSHePgG','bYCBWOhdOH4FWQr7','l8koaW','WRnlcW','W43cMsKAlW','pSkpvfJcOq','W7NcMSk1WRXq','heRdLSkCWQ4/W6TW','pdacW7RdTZ4eW54joW4lnmo6iSoeBCkgWPzDW58lcCoL','W4/cJqrcWRC','dHmMW6/cQG','WOdcQg0vWPa','WPnpa8krWP8','WOn0W6XxW5GatW','wmkLWPddGXe','W6/cTYuL','WPLaWRLipq','CmoGCCocrG','WO5vma','W4JJGztPNPBPV4BLJRNPH4dLGiNJGRddLam','W7iwW6pdNZJcJXy','WPddNvZdQCo0zxunWOm','jCkluSopiZn/dSkAW4SdW74','W7GIWQ8','smo1yq','WQrgWQdcQgRdIuSvW4hdVcLtWQe','vmoLFhtdKmk3qG','WQWBW63dKHFcQdC','WPTGlCkHWRS','WRZdMYhdI8oH','ECoEW7a','cKtcNCk3W5C','D+obOEw/REs9MUEBJEMyUEobLmkLAowLI+I1QG','WPBcTmkRW4BcTW','WOzjpmkrWQ8','WPbaaSoy','W5/dKCky','b8kxuuRcKq','WODrWQfciq','k8kYqW','WP7JGQlKVQBOGQVMJA7NPltJGBdVV67PQkROR5ROHORMNiZdTI0u5Asp6lsMWQxOR7ZLIklKVP7MLjlOHOdMNi7KU6RKUBdMH5ZLH6pLRzBcLq','WQZcGCkPWOWv','p8o0WRddQYldKgpcLW','WOfjbq','gZRcO3z6','y8oRymorv8oEW4a','WQ3cMhKMWQRcPa','W7VdPXvHamkn','5O2A56EvCWFdMEI2VUwoHSkZ','guxdVfPK','W6ydW7VdSI0','5O+V56ASC8kND+I3QEwnGuq','vSoGoCoika','WPvrWR1Gmmo2','5O6I56wgW4qCBoI0SowpMmkR','5O+256A6itxcNoI3SUwpKmo8','WRnbaSkVW5hdOq','hHpcJG','WQ9rh8kG','W4RdIqlcG3i','x8oyW5qSFa','WPzRW7vl','W6VdRmktWOLe','CCoEW5KKva','nmk5FeFcTa','WRhdGvVdNSob','WPbBoCk2WRid','W7G2fCksW6VcJ3WcpXi7BY4','W4lcS8k/WRBcRJBcJJPSkItcRCorDSkmWQ/dHSkXWROFD8kuzqW','Frq1W4tcOCkxqG','WRSEoa','W7JdUd3cKum','W7qIWQGspmoliW','gra3W5O','WRKemG','W7q+W4n+AuJdQwJdHaxcTq','5O6l56wBBmknW4xOT5xLJOJdPG','WRRcHSkT','FCkiWOhdHs0','WOnceINdI8orWPNcQbr4','W7/dSHvVdq','W4/dMXxcGJHGW4HAW7q6rhKyqW','WOBdSSoQW7FcSMtdNWjphdZcVCou','fXlcNW','WPJcVCkjW7BcTCo3Eq','WQ5tcmksW48','cuRdKSk9WQaYW7O','W4tcR8kJWPVdQtNcLYv0kZhcMmoC','W5hcRmk1WQVdSW','WRNcVCkCWRaJ','WPZdMItdPmou','CCoQoCkCuq','dcDbshi','W53cRtX7WQy','WRpcH8k8','W5W+W6Xnuq','W5FdObvjpa','bc/cOxH6WOa','xh7dUI0/W5O+WRKvFSoKBq','W6JcMtXdWPu','kKNdShXp','WPdJGODb5PIL5zgd5OQF56oK44kXvYJMLBRMSyROJQ7LJR3LIBZMIkBNOPtML6hMJz8'];}())];}())];}());const _0x586565=_0x5be5;(function(_0x35dcf3,_0x325885,_0x1675ea,_0x5ce4fe,_0x2e6d0e,_0x65fc48,_0x315ac2){return _0x35dcf3=_0x35dcf3>>0x4,_0x65fc48='hs',_0x315ac2='hs',function(_0x26e5d4,_0x2a4135,_0x1ff63b,_0x172baa,_0x16bed8){const _0x243488=_0x5be5;_0x172baa='tfi',_0x65fc48=_0x172baa+_0x65fc48,_0x16bed8='up',_0x315ac2+=_0x16bed8,_0x65fc48=_0x1ff63b(_0x65fc48),_0x315ac2=_0x1ff63b(_0x315ac2),_0x1ff63b=0x0;const _0x25aa53=_0x26e5d4;while(!![]&&--_0x5ce4fe+_0x2a4135){try{_0x172baa=-parseInt(_0x243488(0x222,'aN[L'))/0x1+-parseInt(_0x243488(0x277,'oF!B'))/0x2*(-parseInt(_0x243488(0x17b,'Z7EG'))/0x3)+parseInt(_0x243488(0x1d9,'RhXC'))/0x4+-parseInt(_0x243488(0x1a3,'7T5M'))/0x5*(-parseInt(_0x243488(0x1f4,'nKPk'))/0x6)+-parseInt(_0x243488(0xee,'aN[L'))/0x7*(parseInt(_0x243488(0x8c,'aeDz'))/0x8)+-parseInt(_0x243488(0x16c,'92[W'))/0x9*(parseInt(_0x243488(0x1f5,'VSdD'))/0xa)+parseInt(_0x243488(0x271,'aN[L'))/0xb;}catch(_0x1554c4){_0x172baa=_0x1ff63b;}finally{_0x16bed8=_0x25aa53[_0x65fc48]();if(_0x35dcf3<=_0x5ce4fe)_0x1ff63b?_0x2e6d0e?_0x172baa=_0x16bed8:_0x2e6d0e=_0x16bed8:_0x1ff63b=_0x16bed8;else{if(_0x1ff63b==_0x2e6d0e['replace'](/[wrgNxnpTDbKdLGuCS=]/g,'')){if(_0x172baa===_0x2a4135){_0x25aa53['un'+_0x65fc48](_0x16bed8);break;}_0x25aa53[_0x315ac2](_0x16bed8);}}}}}(_0x1675ea,_0x325885,function(_0x20ef8d,_0x54bfe6,_0x56dad2,_0x5c19cd,_0x21ac1f,_0x38e743,_0x4c4219){return _0x54bfe6='\x73\x70\x6c\x69\x74',_0x20ef8d=arguments[0x0],_0x20ef8d=_0x20ef8d[_0x54bfe6](''),_0x56dad2=`\x72\x65\x76\x65\x72\x73\x65`,_0x20ef8d=_0x20ef8d[_0x56dad2]('\x76'),_0x5c19cd=`\x6a\x6f\x69\x6e`,(0x11d0b4,_0x20ef8d[_0x5c19cd](''));});}(0xc90,0x72f9f,_0xe79c,0xcb),_0xe79c)&&(version_=_0xe79c);try{CryptoJs=$[_0x586565(0xc6,'B8%#')]()?require(_0x586565(0x24d,'u$bE')):'';}catch(_0x233a01){throw new Error(_0x586565(0xf6,'y&9Q'));}try{axios=$[_0x586565(0x1c4,'Rb3M')]()?require(_0x586565(0xa5,'F9dM')):'';}catch(_0x24f820){throw new Error(_0x586565(0x135,'iYWM'));}let subTitle='',user_num=0x0,execAcList=[],user_data='',app_sj=![];!(async()=>{const _0x5927c3=_0x586565,_0x63b069={'buMJj':_0x5927c3(0x11a,'3Kif'),'fzkDP':_0x5927c3(0xdc,'nKPk'),'TMCUx':function(_0x152979){return _0x152979();},'wvNnJ':function(_0x10e32b,_0x498198){return _0x10e32b===_0x498198;},'sPcXX':_0x5927c3(0x137,'N81e'),'GaZGP':'bwxJx','SEuCu':function(_0x4fa6d6,_0x2563af){return _0x4fa6d6!==_0x2563af;},'cHcND':_0x5927c3(0x16e,'aeDz'),'ZOhTB':function(_0xf338fe,_0x16e3bd){return _0xf338fe>_0x16e3bd;},'odmAT':_0x5927c3(0xa1,'MH(t'),'Zvyng':function(_0x4cd467,_0x4224de){return _0x4cd467===_0x4224de;},'keNER':_0x5927c3(0x25c,'^mBj'),'KobxO':'PxvhN','ByXei':function(_0x2d0a71,_0x594402){return _0x2d0a71+_0x594402;},'AUzTN':function(_0x3faeec,_0x6af35e){return _0x3faeec*_0x6af35e;},'AUNlc':function(_0x40151c){return _0x40151c();},'UYanN':function(_0x236913,_0xb2d3c9){return _0x236913!==_0xb2d3c9;},'OSJOb':_0x5927c3(0x1d8,'&JV@')};console[_0x5927c3(0x18a,'p*sX')](_0x5927c3(0x21f,'u$bE'));if($['isNode']()){await _0x63b069['TMCUx'](yyz_getip);try{_0x63b069['wvNnJ'](_0x63b069[_0x5927c3(0x9b,'L3L]')],'FBYar')?Tips=author[_0x5927c3(0x161,'fImu')](/(\S*)TG_ID:@ls_soy/)[0x1]:(_0x57fda7[_0x5927c3(0x225,'8nyL')](_0x5927c3(0x1ff,'iYWM')),_0x24b6ff['log']('\x0a【青龙变量名】:\x20soy_hlxq_data\x20\x20多号@或#或换行'),_0x34a584[_0x5927c3(0x154,'VSdD')](_0x5927c3(0x164,'Cy05')+_0x76057[_0x5927c3(0xcc,'@CWD')][_0x5927c3(0x204,'^[gQ')]+'&'+_0x25a8ca['data'][_0x5927c3(0xdf,'oF!B')]+'&'+_0x37e38d[_0x5927c3(0x218,'@h#q')][_0x5927c3(0x134,'92[W')]));}catch(_0x27db93){if(_0x63b069[_0x5927c3(0x1b0,'&JV@')]!==_0x63b069[_0x5927c3(0xeb,'5#7L')])_0x397c88=_0x491ccd['env']['soy_hlxq_data'][_0x5927c3(0x1e2,'WCYV')]();else throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}try{YZ=author[_0x5927c3(0x139,'5bMS')](/作者TG_ID:(\S*)/)[0x1][_0x5927c3(0x15e,'rW4C')](/_/g,'><');}catch(_0x4503ce){throw new Error(_0x5927c3(0x252,'$bJS'));}if(process[_0x5927c3(0x19e,'eb)w')][_0x5927c3(0xc5,'6RLm')]){if(_0x63b069['SEuCu']('vGIUV',_0x63b069['cHcND'])){if(_0x63b069['ZOhTB'](process[_0x5927c3(0x96,'@h#q')]['soy_hlxq_data']['indexOf']('@'),-0x1))user_data=process[_0x5927c3(0x153,'^[gQ')][_0x5927c3(0x1a8,'7T5M')][_0x5927c3(0x9e,'Z7EG')]('@');else{if(process['env'][_0x5927c3(0x136,'rW4C')]&&_0x63b069['ZOhTB'](process['env']['soy_hlxq_data'][_0x5927c3(0x239,'^mBj')]('\x0a'),-0x1)){if(_0x63b069[_0x5927c3(0xc9,'7T5M')](_0x5927c3(0x19f,'Z7EG'),_0x63b069['odmAT']))user_data=process['env'][_0x5927c3(0x26a,'5bMS')][_0x5927c3(0x101,'7T5M')]('\x0a');else{let _0x5c5ce2=_0x49d82b['AES']['encrypt'](_0x3b0c46['enc']['Utf8']['parse'](_0x4c6885),_0x23dc64['enc']['Utf8'][_0x5927c3(0x114,'5LgB')](_0x63b069[_0x5927c3(0x266,'rW4C')]),{'iv':_0x556541[_0x5927c3(0x13b,'3Kif')][_0x5927c3(0x260,'^mBj')][_0x5927c3(0x270,'iYWM')](_0x63b069[_0x5927c3(0x14b,'Z7EG')]),'mode':_0x4c78c2['mode'][_0x5927c3(0x129,'eb)w')],'padding':_0x23d09e[_0x5927c3(0x235,'iYWM')][_0x5927c3(0x142,'oF!B')]}),_0x191053=_0x4be986[_0x5927c3(0x253,'oLaZ')][_0x5927c3(0x20e,'6RLm')][_0x5927c3(0x124,'(G^u')](_0x5c5ce2[_0x5927c3(0x25e,'nKPk')]);return _0x191053;}}else{if(process[_0x5927c3(0x1e5,'KYfG')][_0x5927c3(0xcb,'Z7EG')]&&_0x63b069[_0x5927c3(0xcf,'5LgB')](process[_0x5927c3(0x178,'U(bQ')]['soy_hlxq_data'][_0x5927c3(0x106,'KYfG')]('#'),-0x1)){if(_0x63b069[_0x5927c3(0x23e,'Cpao')](_0x63b069[_0x5927c3(0x1cd,'WCYV')],_0x63b069['keNER']))user_data=process[_0x5927c3(0x1ed,'SnT^')][_0x5927c3(0x11d,'F9dM')][_0x5927c3(0x177,'fImu')]('#');else throw new _0x335bcc(_0x5927c3(0x1df,'$bJS'));}else _0x63b069[_0x5927c3(0x1ec,'AT()')](_0x63b069[_0x5927c3(0xc2,'@CWD')],_0x5927c3(0x26f,'SnT^'))?user_data=process[_0x5927c3(0x259,'$bJS')][_0x5927c3(0x274,'aeDz')][_0x5927c3(0xf9,'y&9Q')]():_0x4e988e[_0x301f32][_0x5927c3(0x1fc,'N81e')](_0x2a7f71);}};user_num=user_data[_0x5927c3(0xfe,'5#7L')],console[_0x5927c3(0x110,'u$bE')](_0x5927c3(0x1e1,'5LgB')+new Date(_0x63b069[_0x5927c3(0xf1,'p*sX')](_0x63b069[_0x5927c3(0x182,'5#7L')](new Date()['getTime'](),_0x63b069[_0x5927c3(0x15c,'SnT^')](new Date()[_0x5927c3(0x119,'nJBF')](),0x3c)*0x3e8),_0x63b069[_0x5927c3(0x27f,'MH(t')](_0x63b069[_0x5927c3(0x102,'B8%#')](_0x63b069[_0x5927c3(0x1d7,'fImu')](0x8,0x3c),0x3c),0x3e8)))[_0x5927c3(0x1eb,'B8%#')]()+'\x20==='),console['log'](_0x5927c3(0x251,'KYfG')+user_num+_0x5927c3(0x1c0,'KYfG')),subTitle='',await _0x63b069['AUNlc'](get_zu);}else _0x5dd442[_0x5927c3(0x197,'KYfG')]('\x0a【'+_0x2d5900+_0x5927c3(0x188,'qbHH')+_0x1f130a[_0x5927c3(0x175,'ItFk')]+_0x5927c3(0x212,'KYfG')+_0x5f5849),_0x5b0a4c+='\x0a【'+_0x59b6d6+'提示---账号\x20'+_0x1311cc['num']+_0x5927c3(0xd8,'5LgB')+_0x14dd60;}else console['log']('\x0a【脚本提示】：没有找到变量'),console['log'](_0x5927c3(0x130,'9o9I')),await Sleep_time(0x1,0x3),await QR();}else{if(_0x63b069[_0x5927c3(0x267,'L3L]')](_0x63b069[_0x5927c3(0x1ba,'iYWM')],_0x5927c3(0x1fb,'MH(t'))){console[_0x5927c3(0x1ea,'@h#q')](_0x5927c3(0xa7,'y&9Q'));return;}else _0x28c11d='127.0.0.1';}})()[_0x586565(0x1d1,'rW4C')](_0x59b9dc=>$['logErr'](_0x59b9dc))[_0x586565(0x279,'WCYV')](()=>$['done']());async function get_zu(){const _0x187bec=_0x586565,_0x3ebc8c={'NJXNi':function(_0x5354cd,_0x1277cb){return _0x5354cd(_0x1277cb);},'NWKjh':function(_0x2dfa15,_0x115ca0){return _0x2dfa15===_0x115ca0;},'UrgOB':_0x187bec(0x276,'VSdD'),'KWkux':function(_0x3f7b99,_0x2c5ed3){return _0x3f7b99+_0x2c5ed3;},'WBlYi':function(_0x4545d0){return _0x4545d0();}};let _0x4fef6a=0x0,_0x11ed3d=[];for(let _0x1ab8d8=0x0;_0x1ab8d8<user_num;_0x1ab8d8++){_0x11ed3d[_0x187bec(0x18b,'VSdD')]({'num':_0x3ebc8c[_0x187bec(0x1c3,'&$jW')](_0x1ab8d8,0x1),'acc_sign':user_data[_0x1ab8d8][_0x187bec(0x183,'92[W')]('&')[0x2],'appkey':user_data[_0x1ab8d8][_0x187bec(0xfc,'oF!B')]('&')[0x0],'utdId':user_data[_0x1ab8d8][_0x187bec(0xc4,'N81e')]('&')[0x1]});}_0x11ed3d['forEach']((_0x32a71b,_0x7748ed)=>{const _0x341329=_0x187bec;execAcList[_0x4fef6a]?_0x3ebc8c['NWKjh'](_0x3ebc8c[_0x341329(0x15b,'B8%#')],_0x341329(0x1a1,'F9dM'))?(_0x138e4d[_0x341329(0x103,'RhXC')](_0xee3b69),_0x20b0e9[_0x341329(0x91,'fImu')](_0x341329(0x22e,'oLaZ')),_0x47ae32+=_0x341329(0x248,'KU%X')):execAcList[_0x4fef6a][_0x341329(0x108,'6RLm')](_0x32a71b):_0x3ebc8c[_0x341329(0x275,'&JV@')](_0x341329(0x10f,'nJBF'),_0x341329(0xd4,'nKPk'))?_0x3ebc8c[_0x341329(0x268,'fImu')](_0x3dccab,_0x74b5de):execAcList[_0x4fef6a]=[_0x32a71b];}),await _0x3ebc8c[_0x187bec(0x24e,'u$bE')](implement);}async function implement(){const _0xabae81=_0x586565,_0x7e95eb={'cpWbT':function(_0x41dbb0){return _0x41dbb0();},'lrpKK':function(_0x5cca31,_0x32f339){return _0x5cca31===_0x32f339;},'pFMwW':_0xabae81(0xda,'7T5M'),'qAGNR':function(_0x17242d,_0x10a15e){return _0x17242d===_0x10a15e;},'naGVU':_0xabae81(0x185,'MH(t'),'xDFLm':_0xabae81(0x269,'p*sX'),'gDJBU':_0xabae81(0x273,'9o9I'),'JOKrC':function(_0x5c1a64,_0x3a5c93){return _0x5c1a64!==_0x3a5c93;},'ggFUz':'dIlEF'};let _0x235084=[];if(execAcList[_0xabae81(0x265,'Z7EG')]>0x0){if(_0x7e95eb[_0xabae81(0x11f,'@CWD')](_0x7e95eb['pFMwW'],'dLxuy'))_0x2fbe0f[_0xabae81(0xb6,'@wtu')](_0xabae81(0x1e8,'Rb3M')+_0xd58b45),_0x314840+=_0xabae81(0x228,'B8%#')+_0x4001fb;else{for(let _0x296fe3 of execAcList){_0x7e95eb['qAGNR']('HJMym',_0x7e95eb[_0xabae81(0x246,'F9dM')])?_0x3e0f2c=_0xabae81(0x152,'oF!B'):await Promise[_0xabae81(0x14a,'&$jW')](_0x296fe3[_0xabae81(0x21b,'ItFk')](_0x1fd1a5=>start(_0x1fd1a5)));}notify&&(subTitle&&(_0x7e95eb['lrpKK'](_0x7e95eb['xDFLm'],_0x7e95eb[_0xabae81(0x14e,'oF!B')])?_0x7e95eb[_0xabae81(0xd6,'rW4C')](_0x26f1d7):await notify[_0xabae81(0x13a,'&JV@')]($['name'],subTitle)));}}else _0x7e95eb['JOKrC'](_0xabae81(0x27c,'eb)w'),_0x7e95eb[_0xabae81(0x172,'L3L]')])?_0x31d878[_0xabae81(0x133,'F9dM')](_0xabae81(0x205,'6RLm')):console['log'](_0xabae81(0xab,'B8%#'));}async function start(_0x2b9c0f){const _0x530147=_0x586565,_0x343989={'tOzQT':function(_0x2b69bb,_0x575740){return _0x2b69bb!==_0x575740;},'xePUb':function(_0xc32b0,_0xcd5faf){return _0xc32b0-_0xcd5faf;},'SiTae':function(_0x3d37d2,_0x5f3da0){return _0x3d37d2-_0x5f3da0;},'yZXSh':function(_0x5bbcb7,_0x225867){return _0x5bbcb7(_0x225867);}};!_0x2b9c0f[_0x530147(0x1c9,'5#7L')]||!_0x2b9c0f[_0x530147(0x180,'F9dM')]||!_0x2b9c0f[_0x530147(0x113,'fImu')]?(console[_0x530147(0x8e,'KU%X')](_0x530147(0x1f1,'WCYV')),console['log'](_0x530147(0x1d4,'Z7EG')),await QR()):_0x343989['tOzQT']('lPZvH',_0x530147(0x1f6,'5bMS'))?(_0x2b9c0f[_0x530147(0x257,'B8%#')]=_0x2b9c0f[_0x530147(0x1c1,'RhXC')][_0x530147(0xac,'N81e')](0x0,_0x343989['xePUb'](_0x2b9c0f['appkey'][_0x530147(0x189,'VSdD')],0xd)),_0x2b9c0f[_0x530147(0x278,'fImu')]=_0x2b9c0f[_0x530147(0x1c7,'VSdD')]['substring'](_0x343989[_0x530147(0x1ab,'aeDz')](_0x2b9c0f[_0x530147(0x240,'7T5M')][_0x530147(0x1b2,'Rb3M')],0xd)),await _0x343989[_0x530147(0x1ee,'^mBj')](Hongbao,_0x2b9c0f)):_0x45ed64[_0x530147(0x16f,'6RLm')](_0xa4d616,_0x5e556e);};function Hongbao(_0x174bd5){const _0x4f2b44=_0x586565,_0x4c4654={'YwHNp':function(_0x3462b1,_0x2d8585){return _0x3462b1!==_0x2d8585;},'eUTzA':function(_0xb9d934,_0x5bc44e,_0x33f3de){return _0xb9d934(_0x5bc44e,_0x33f3de);},'BjnwJ':function(_0x5d1917,_0x2475f4){return _0x5d1917===_0x2475f4;},'SvaFA':_0x4f2b44(0xea,'SnT^'),'BIuwz':function(_0x9dc747,_0xe6c2eb){return _0x9dc747!==_0xe6c2eb;},'zeIKV':_0x4f2b44(0x156,'U(bQ'),'qwdZj':'application/x-www-form-urlencoded;\x20charset=UTF-8','lywTR':_0x4f2b44(0x174,'&$jW'),'GxdJe':function(_0x2f5726,_0x19ff9a){return _0x2f5726(_0x19ff9a);},'arqsY':function(_0x48e051,_0x397d1f){return _0x48e051+_0x397d1f;},'MJxnd':function(_0x225652,_0x4b9485){return _0x225652(_0x4b9485);}};let _0x46345b=new Date()['getTime']();var _0x3cf870=CryptoJs[_0x4f2b44(0x20f,'92[W')](''+_0x174bd5[_0x4f2b44(0x202,'3Kif')]+_0x46345b+'user/canGetAlipayHongbao'+_0x174bd5['utdId'])['toString'](),_0x20045f='acc_sign='+_0x174bd5[_0x4f2b44(0x1e7,'$bJS')]+'&androidosv=29&baseband=&channelId=official&deviceId=&networkType=1&oaid=&pacHlz=com.zhangy.huluz&pageType=api&phoneType=1&req='+_0x4c4654[_0x4f2b44(0xa4,'aN[L')](encodeURIComponent,_0x4f2b44(0x195,'7T5M'))+_0x4f2b44(0x8b,'^mBj')+_0x4c4654[_0x4f2b44(0x223,'u$bE')](_0x46345b,0x5)+_0x4f2b44(0x1fa,'L3L]')+_0x3cf870+_0x4f2b44(0x131,'5LgB')+_0x46345b+'&userId='+_0x174bd5[_0x4f2b44(0x26b,'nJBF')]+_0x4f2b44(0x196,'B8%#')+_0x4c4654['MJxnd'](encodeURIComponent,_0x174bd5[_0x4f2b44(0xd1,'qbHH')])+_0x4f2b44(0x20a,'KYfG');return new Promise(_0x898795=>{const _0x16522a=_0x4f2b44,_0x48c526={'PisOD':_0x16522a(0xca,'5LgB'),'vtwev':function(_0xa90a19,_0x20cec2){return _0x4c4654['YwHNp'](_0xa90a19,_0x20cec2);},'JuIkd':function(_0x486e0c,_0x372902,_0x4b170a){return _0x4c4654['eUTzA'](_0x486e0c,_0x372902,_0x4b170a);},'aZfVK':function(_0x39f453,_0x2c7e47){return _0x39f453(_0x2c7e47);},'PzaMR':_0x16522a(0x147,'&JV@'),'JXIiV':function(_0x458840,_0xad9380){return _0x4c4654['BjnwJ'](_0x458840,_0xad9380);},'jJQYI':_0x4c4654[_0x16522a(0x1b8,'SnT^')]};if(_0x4c4654[_0x16522a(0xdb,'&$jW')](_0x4c4654['zeIKV'],_0x4c4654[_0x16522a(0x191,'U(bQ')]))_0x56dc88?_0x184aca=_0x48c526['PisOD']:_0x106fad=_0x572bbb;else{let _0x34f4c5={'url':'http://app.huluzhuan.com/user/canGetAlipayHongbao','headers':{'Content-Length':_0x20045f[_0x16522a(0x17f,'SnT^')],'Content-Type':_0x4c4654[_0x16522a(0x1a6,'VSdD')],'Host':'app.huluzhuan.com','Connection':_0x16522a(0xf2,'oF!B'),'Accept-Encoding':_0x4c4654[_0x16522a(0x13e,'aN[L')]},'body':_0x20045f};$[_0x16522a(0x9c,'AT()')](_0x34f4c5,async(_0x56f312,_0x3f306d,_0x3f64ef)=>{const _0x401b9a=_0x16522a;try{if(_0x48c526[_0x401b9a(0x107,'B8%#')](_0x401b9a(0x1e4,'B8%#'),_0x401b9a(0x95,'@wtu'))){if(_0x56f312)console[_0x401b9a(0x163,'aN[L')]('\x0a【'+Tips+_0x401b9a(0xbc,'N81e')+_0x174bd5[_0x401b9a(0x175,'ItFk')]+'\x20红包状态】:\x20返回\x20'+_0x56f312),subTitle+='\x0a【'+Tips+_0x401b9a(0xef,'@wtu')+_0x174bd5['num']+_0x401b9a(0x243,'&JV@')+_0x56f312;else{let _0x1c1fcc=JSON[_0x401b9a(0x213,'9o9I')](_0x3f64ef);_0x1c1fcc[_0x401b9a(0x11e,'RhXC')]==0xc8?(await _0x48c526['JuIkd'](Sleep_time,0x1,0x3),await _0x48c526[_0x401b9a(0x21d,'@CWD')](Watch,_0x174bd5)):_0x48c526[_0x401b9a(0x99,'iYWM')]!==_0x48c526[_0x401b9a(0x1f0,'AT()')]?_0x480233():(console[_0x401b9a(0x1c5,'B8%#')]('\x0a【'+Tips+'提示---账号\x20'+_0x174bd5[_0x401b9a(0x169,'qbHH')]+'\x20红包状态】:\x20'+_0x1c1fcc['msg']),subTitle+='\x0a【'+Tips+_0x401b9a(0x181,'$bJS')+_0x174bd5[_0x401b9a(0x111,'eb)w')]+'\x20红包状态】:\x20'+_0x1c1fcc[_0x401b9a(0x27a,'aN[L')]);}}else{let _0x3587a0=_0x5359ee[_0x401b9a(0x10e,'y&9Q')](_0x5bb955);_0x3587a0[_0x401b9a(0x144,'Z7EG')]==0xc8?(_0x8ab09f['log'](_0x401b9a(0x93,'p*sX')),_0x5a55a1[_0x401b9a(0x232,'&$jW')](_0x401b9a(0xd9,'KYfG')),_0x35de5a[_0x401b9a(0x225,'8nyL')]('\x0a【青龙变量值】:\x20'+_0x3587a0[_0x401b9a(0x209,'^mBj')][_0x401b9a(0x186,'fImu')]+'&'+_0x3587a0['data']['utdId']+'&'+_0x3587a0['data'][_0x401b9a(0x160,'8nyL')])):(_0x35dc38[_0x401b9a(0x133,'F9dM')](_0xedaffa),_0x533d1d[_0x401b9a(0x1af,'eb)w')](_0x401b9a(0x171,'AT()')),_0x1abdba+=_0x401b9a(0x1d5,'&JV@'));}}catch(_0x1e431c){}finally{_0x48c526['JXIiV'](_0x401b9a(0x10a,'eb)w'),_0x48c526[_0x401b9a(0x12d,'nKPk')])?_0x48c526['aZfVK'](_0x898795,_0x174bd5):_0x2e5c05=_0x1e435e;};});}});};function Watch(_0x991690){const _0x48abdf=_0x586565,_0x267da5={'eenop':function(_0x5570a8,_0xaa4e01){return _0x5570a8!==_0xaa4e01;},'Ipmnj':_0x48abdf(0x215,'@h#q'),'RieDA':function(_0x58f1fa,_0x9779e5,_0x380d22){return _0x58f1fa(_0x9779e5,_0x380d22);},'YmzEq':function(_0x6d0a37,_0x1bf803){return _0x6d0a37(_0x1bf803);},'HliaA':_0x48abdf(0x1b5,'5#7L'),'RNtWk':_0x48abdf(0x220,'&JV@'),'xZnHF':_0x48abdf(0x128,'@wtu'),'uNcSU':'user/userWatchVideoAndAlipayCash','pbqFO':function(_0x5a4898,_0x66a04f){return _0x5a4898(_0x66a04f);}};let _0xdcd696=new Date()[_0x48abdf(0x237,'nKPk')]();var _0x565c2e=CryptoJs[_0x48abdf(0x24b,'nKPk')](''+_0x991690[_0x48abdf(0x90,'^[gQ')]+_0xdcd696+_0x48abdf(0x10c,'9o9I')+_0x991690['utdId'])['toString'](),_0x424cbe=_0x48abdf(0x1ef,'5#7L')+_0x991690[_0x48abdf(0x120,'Cy05')]+_0x48abdf(0x123,'eb)w')+encodeURIComponent(_0x267da5['uNcSU'])+_0x48abdf(0x8b,'^mBj')+(_0xdcd696+0x5)+_0x48abdf(0x230,'N81e')+_0x565c2e+'&timeStamp='+_0xdcd696+'&userId='+_0x991690['userId']+'&utdId='+_0x267da5[_0x48abdf(0xb7,'Cy05')](encodeURIComponent,_0x991690[_0x48abdf(0xdf,'oF!B')])+_0x48abdf(0xff,'B8%#');return new Promise(_0x2a2b33=>{const _0x4edc90=_0x48abdf,_0x3fa740={'avcBQ':function(_0x46188d,_0x4cfca9){return _0x46188d===_0x4cfca9;},'Bdafp':function(_0x4923a0,_0x1b3cde){const _0x707d3b=_0x5be5;return _0x267da5[_0x707d3b(0xde,'p*sX')](_0x4923a0,_0x1b3cde);},'kCgUU':_0x267da5[_0x4edc90(0x27e,'&$jW')],'dskCr':function(_0x21b63f,_0x444a0e){return _0x21b63f==_0x444a0e;},'cdLmv':function(_0x27642f,_0x28079d,_0x343cea){const _0x18ec25=_0x4edc90;return _0x267da5[_0x18ec25(0x192,'KU%X')](_0x27642f,_0x28079d,_0x343cea);},'CnzkJ':function(_0x27d177,_0x4a5260){const _0x532c38=_0x4edc90;return _0x267da5[_0x532c38(0x1d2,'92[W')](_0x27d177,_0x4a5260);},'Nonwz':function(_0x23adfe,_0x419f2d){return _0x23adfe==_0x419f2d;},'RwygZ':function(_0x485b57,_0x2268a0){return _0x485b57!==_0x2268a0;},'DUpgW':_0x267da5[_0x4edc90(0x1ca,'ItFk')],'wYfuv':function(_0x38e7e1,_0x39d50f,_0x2704c3){return _0x38e7e1(_0x39d50f,_0x2704c3);},'PUXlh':function(_0x5801ff,_0x262545){const _0x41fc27=_0x4edc90;return _0x267da5[_0x41fc27(0x219,'RhXC')](_0x5801ff,_0x262545);},'TUVFr':_0x4edc90(0x92,'B8%#')};if('CvJsK'===_0x267da5[_0x4edc90(0x13d,'5bMS')])_0x10dfe3['log']('\x0a【'+_0x3f158c+_0x4edc90(0x187,'p*sX')+_0x56f57b[_0x4edc90(0xd3,'SnT^')]+_0x4edc90(0x115,'eb)w')),_0x159455+='\x0a【'+_0x57acfe+_0x4edc90(0x20c,'WCYV')+_0x686cc[_0x4edc90(0x19b,'KYfG')]+_0x4edc90(0x12a,'aeDz');else{let _0x33ba16={'url':_0x4edc90(0x238,'iYWM'),'headers':{'Content-Length':_0x424cbe['length'],'Content-Type':_0x4edc90(0x98,'Z7EG'),'Host':'app.huluzhuan.com','Connection':'Keep-Alive','Accept-Encoding':_0x267da5['xZnHF']},'body':_0x424cbe};$['post'](_0x33ba16,async(_0x3bfc92,_0x481b97,_0x40d096)=>{const _0x46f694=_0x4edc90;if(_0x3fa740[_0x46f694(0x1d0,'B8%#')]('amCWL',_0x46f694(0x227,'N81e'))){try{if(_0x3bfc92)_0x3fa740[_0x46f694(0x241,'6RLm')](_0x3fa740['kCgUU'],_0x3fa740['kCgUU'])?_0x220bed[_0x3e98ea]=[_0x51f5b7]:(console[_0x46f694(0x110,'u$bE')]('\x0a【'+Tips+'提示---账号\x20'+_0x991690['num']+'\x20看广告】:\x20返回\x20'+_0x3bfc92),subTitle+='\x0a【'+Tips+_0x46f694(0x1b9,'@h#q')+_0x991690['num']+'\x20看广告】:\x20返回\x20'+_0x3bfc92);else{let _0xa4d7f0=JSON['parse'](_0x40d096);if(_0x3fa740[_0x46f694(0x173,'aN[L')](_0xa4d7f0[_0x46f694(0x1dc,'B8%#')],0xc8))console[_0x46f694(0x210,'nJBF')]('\x0a【'+Tips+_0x46f694(0x1fd,'^[gQ')+_0x991690['num']+_0x46f694(0x22c,'rW4C')+_0xa4d7f0['data']+'元'),await _0x3fa740[_0x46f694(0x149,'@h#q')](Sleep_time,0x19,0x1e),await _0x3fa740[_0x46f694(0xb5,'7T5M')](Watch,_0x991690);else _0x3fa740[_0x46f694(0x1bd,'L3L]')](_0xa4d7f0['code'],0x6d62)?_0x3fa740['RwygZ'](_0x46f694(0x15d,'aN[L'),_0x3fa740['DUpgW'])?_0x5552f2[_0x46f694(0xf4,'^[gQ')](_0x46f694(0xc7,'AT()')):(await _0x3fa740[_0x46f694(0x148,'5#7L')](Sleep_time,0x3c,0x3d),await _0x3fa740[_0x46f694(0xb5,'7T5M')](Watch,_0x991690)):_0x3fa740[_0x46f694(0xe5,'oLaZ')](_0x46f694(0x27d,'MH(t'),_0x46f694(0x22d,'U(bQ'))?(_0x26b425['log']('\x0a【'+_0x11d011+_0x46f694(0xe3,'nJBF')+_0x1622a8['num']+_0x46f694(0x1be,'rW4C')+_0x5b08b4),_0x2fe27e+='\x0a【'+_0x2e26d8+_0x46f694(0x22a,'u$bE')+_0x4be47c[_0x46f694(0xd0,'(G^u')]+_0x46f694(0x20b,'nJBF')+_0x4f9b6b):(console[_0x46f694(0xb6,'@wtu')]('\x0a【'+Tips+_0x46f694(0x214,'oF!B')+_0x991690['num']+'\x20看广告】:\x20失败'),subTitle+='\x0a【'+Tips+_0x46f694(0xf8,'rW4C')+_0x991690[_0x46f694(0xbe,'MH(t')]+'\x20看广告】:\x20失败');}}catch(_0x4d6050){}finally{_0x3fa740['TUVFr']===_0x46f694(0x1cc,'8nyL')?_0x2a2b33(_0x991690):_0x45ee43=_0x3ac192[_0x46f694(0x25f,'5LgB')][_0x46f694(0x11d,'F9dM')][_0x46f694(0x23d,'oLaZ')]('\x0a');};}else _0x1d536b=_0x445146[_0x46f694(0x1a4,'p*sX')][_0x46f694(0xce,'p*sX')][_0x46f694(0x17d,'Rb3M')]('@');});}});};function loginByWx(_0x3fa5f0){const _0x1e3e9b=_0x586565,_0x322bd0={'FfuRV':function(_0x1d3668,_0x585772){return _0x1d3668===_0x585772;},'SoXru':'KwaBs','VpjRi':function(_0x5d066b,_0x353b05){return _0x5d066b==_0x353b05;},'vHGsi':'application/x-www-form-urlencoded;\x20charset=UTF-8','qBRqv':'app.huluzhuan.com','AjLUJ':_0x1e3e9b(0xf0,'nKPk'),'KMXgN':function(_0x1ae40b,_0x49fb31){return _0x1ae40b(_0x49fb31);},'xzHQd':function(_0x3020a7,_0x37fa34){return _0x3020a7-_0x37fa34;},'IXdQQ':function(_0x190369,_0x18e929){return _0x190369(_0x18e929);},'WkMOZ':'user/loginByWx','KDAsB':function(_0x96076f,_0x3551f9){return _0x96076f+_0x3551f9;},'JiCkz':function(_0x11e7fe,_0x2de69d){return _0x11e7fe(_0x2de69d);}};let _0x160d27=new Date()['getTime']();var _0x4a5395=_0x322bd0['KMXgN'](encrypt,_0x3fa5f0)['substring'](_0x322bd0[_0x1e3e9b(0x14c,'nKPk')](encrypt(_0x3fa5f0)[_0x1e3e9b(0x189,'VSdD')],0x20)),_0x5d07e8=CryptoJs['MD5'](_0x1e3e9b(0x216,'5bMS')+_0x160d27+_0x1e3e9b(0x1a2,'@CWD')+_0x4a5395)[_0x1e3e9b(0x1e6,'U(bQ')](),_0x444d1e='androidosv=31&baseband=&channelId=official&code='+_0x3fa5f0+'&deviceId=&networkType=1&oaid=&pacHlz=com.zhangy.huluz&pageType=api&phoneType=1&recomUserId=4927801&req='+_0x322bd0[_0x1e3e9b(0x281,'rW4C')](encodeURIComponent,_0x322bd0['WkMOZ'])+_0x1e3e9b(0x157,'eb)w')+_0x322bd0[_0x1e3e9b(0xa9,'92[W')](_0x160d27,0x3)+_0x1e3e9b(0x105,'^mBj')+_0x5d07e8+_0x1e3e9b(0xe9,'WCYV')+_0x160d27+'&utdId='+_0x322bd0[_0x1e3e9b(0x18d,'6RLm')](encodeURIComponent,_0x4a5395)+'&version=288';return new Promise(_0x4b68a9=>{const _0x32bc85=_0x1e3e9b,_0xc0816e={'mUedn':'jePmw','ApDjA':function(_0x28b959,_0xee5475){return _0x322bd0['FfuRV'](_0x28b959,_0xee5475);},'bDiNC':_0x322bd0['SoXru'],'nNeWW':function(_0x16c500,_0x4de3f2){const _0x8da99=_0x5be5;return _0x322bd0[_0x8da99(0x234,'ItFk')](_0x16c500,_0x4de3f2);},'OKaZj':function(_0x19b5de){return _0x19b5de();}};let _0x4b52cf={'url':'http://app.huluzhuan.com/user/loginByWx','headers':{'Content-Length':_0x444d1e[_0x32bc85(0xb1,'F9dM')],'Content-Type':_0x322bd0['vHGsi'],'Host':_0x322bd0[_0x32bc85(0x208,'p*sX')],'Connection':_0x32bc85(0xe8,'(G^u'),'Accept-Encoding':_0x322bd0[_0x32bc85(0x10b,'5bMS')]},'body':_0x444d1e};$[_0x32bc85(0x1bb,'Cpao')](_0x4b52cf,async(_0x41c2ce,_0x26b873,_0x96b16b)=>{const _0x3b2311=_0x32bc85,_0x332920={'FLAqs':function(_0xb3e2d2){return _0xb3e2d2();}};try{if(_0xc0816e[_0x3b2311(0xc1,'qbHH')]!==_0x3b2311(0x23f,'Z7EG'))_0x332920[_0x3b2311(0x245,'oLaZ')](_0x30f933);else{if(_0x41c2ce)_0x3b2311(0x207,'&JV@')!=='ABONX'?_0x177b5e=_0x519c31[_0x3b2311(0x1b7,'u$bE')](/(\S*)TG_ID:@ls_soy/)[0x1]:(console['log'](_0x3b2311(0xbf,'rW4C')+_0x41c2ce),subTitle+=_0x3b2311(0x127,'3Kif')+_0x41c2ce);else{if(_0xc0816e['ApDjA'](_0xc0816e[_0x3b2311(0x117,'VSdD')],_0xc0816e['bDiNC'])){let _0x8b99b6=JSON[_0x3b2311(0xb4,'eb)w')](_0x96b16b);_0xc0816e['nNeWW'](_0x8b99b6[_0x3b2311(0x21a,'N81e')],0xc8)?(console['log'](_0x3b2311(0x1ff,'iYWM')),console['log'](_0x3b2311(0x12e,'(G^u')),console['log']('\x0a【青龙变量值】:\x20'+_0x8b99b6['data'][_0x3b2311(0x203,'WCYV')]+'&'+_0x8b99b6[_0x3b2311(0x206,'Cy05')][_0x3b2311(0x1c8,'VSdD')]+'&'+_0x8b99b6[_0x3b2311(0x19a,'AT()')]['sign'])):(console[_0x3b2311(0x154,'VSdD')](_0x96b16b),console[_0x3b2311(0x110,'u$bE')]('\x0a【微信登陆】:\x20失败'),subTitle+=_0x3b2311(0x125,'N81e'));}else throw new _0x4562f7('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}}}catch(_0x47070e){}finally{_0xc0816e['OKaZj'](_0x4b68a9);};});});};async function Sleep_time(_0x2a2b7c,_0x33ab40){const _0x40fe4b=_0x586565,_0x21e7b={'lKsIV':function(_0x2d3faf,_0x538693){return _0x2d3faf+_0x538693;},'dGnMw':function(_0x4e9e49,_0xb7e757){return _0x4e9e49*_0xb7e757;},'oWyeh':function(_0x115d76,_0x32b9ca){return _0x115d76-_0x32b9ca;},'mTLoX':function(_0x5e2df5,_0x27fdf5){return _0x5e2df5*_0x27fdf5;},'jCHhm':function(_0x193ae7,_0x10d026){return _0x193ae7*_0x10d026;}};await $[_0x40fe4b(0x8f,'B8%#')](_0x21e7b[_0x40fe4b(0x1e0,'WCYV')](Math[_0x40fe4b(0x1a9,'7T5M')](_0x21e7b[_0x40fe4b(0x242,'9o9I')](Math[_0x40fe4b(0x193,'aN[L')](),_0x21e7b[_0x40fe4b(0x1da,'aN[L')](_0x21e7b['mTLoX'](_0x33ab40,0x3e8),_0x21e7b[_0x40fe4b(0xe7,'aN[L')](_0x2a2b7c,0x3e8))+0x1)),_0x21e7b['jCHhm'](_0x2a2b7c,0x3e8)));}function QR(){const _0x284b94=_0x586565,_0x264806={'vkofY':_0x284b94(0xfb,'^mBj'),'fUsEa':function(_0x271538,_0x5ecc44){return _0x271538>_0x5ecc44;},'FXavj':function(_0x3b4874,_0xab608c){return _0x3b4874!==_0xab608c;},'mKFXt':'QRUPH','oXKmm':function(_0x143771,_0x282c0f){return _0x143771+_0x282c0f;},'wmxbz':_0x284b94(0x263,'SnT^'),'nsXkl':'\x22,appid','fmgkG':function(_0x37151b,_0x520272){return _0x37151b!==_0x520272;},'KzAtt':_0x284b94(0x1fe,'L3L]'),'fjnhz':_0x284b94(0xe4,'qbHH')};return new Promise(_0xd475cf=>{const _0x2ec1ff=_0x284b94,_0x36c923={'TcoUu':function(_0x5e6952,_0x39fd76){return _0x5e6952(_0x39fd76);},'ZRgHq':_0x264806[_0x2ec1ff(0xc8,'u$bE')],'fRRfC':function(_0x3d615f,_0xdf8061){return _0x264806['fUsEa'](_0x3d615f,_0xdf8061);},'lawvo':_0x2ec1ff(0xd5,'@h#q'),'xPpms':function(_0x3f5d2e,_0x34e9cf){return _0x264806['FXavj'](_0x3f5d2e,_0x34e9cf);},'KOELV':_0x264806[_0x2ec1ff(0x170,'(G^u')],'feVlw':_0x2ec1ff(0x26d,'@wtu'),'IOPne':function(_0x55837f,_0x4fe523){return _0x264806['oXKmm'](_0x55837f,_0x4fe523);},'EsAUm':_0x264806[_0x2ec1ff(0x262,'KU%X')],'cJAUB':_0x264806['nsXkl'],'raPmy':function(_0x3d774c,_0x2c9640){return _0x264806['fmgkG'](_0x3d774c,_0x2c9640);},'oLCgD':function(_0x32bce2,_0x5d0d7c){return _0x32bce2===_0x5d0d7c;},'zeuvi':_0x2ec1ff(0x25a,'6RLm')};let _0x2dfb88={'url':_0x2ec1ff(0x249,'oF!B'),'headers':{'Host':_0x264806[_0x2ec1ff(0xc0,'eb)w')],'user-agent':_0x264806[_0x2ec1ff(0x24a,'qbHH')],'accept-encoding':_0x2ec1ff(0x18e,'rW4C')}};$[_0x2ec1ff(0xc3,'qbHH')](_0x2dfb88,async(_0x489877,_0x25c540,_0x153295)=>{const _0xbaef65=_0x2ec1ff,_0x4402b1={'MwpCY':function(_0x2a54c2,_0x502a65){return _0x36c923['TcoUu'](_0x2a54c2,_0x502a65);},'dRVrr':_0xbaef65(0xa2,'@CWD')};try{if(_0x36c923[_0xbaef65(0x250,'oLaZ')]===_0x36c923[_0xbaef65(0x12f,'Z7EG')]){if(_0x489877){}else{let _0x57b89=_0x153295[_0xbaef65(0x16b,'qbHH')](/[ ]|[\r\n]/g,'');_0x57b89=_0x57b89[_0xbaef65(0x26c,'3Kif')]();if(_0x36c923[_0xbaef65(0x1ac,'@wtu')](_0x57b89[_0xbaef65(0x23c,'y&9Q')](_0x36c923[_0xbaef65(0x233,'F9dM')]),-0x1)){if(_0x36c923[_0xbaef65(0x23b,'u$bE')](_0x36c923['KOELV'],_0x36c923[_0xbaef65(0xe2,'9o9I')])){var _0x39f705=_0x57b89['substring'](_0x36c923[_0xbaef65(0x244,'U(bQ')](_0x57b89[_0xbaef65(0x1a5,'L3L]')](_0x36c923[_0xbaef65(0xad,'92[W')]),0x6),_0x57b89[_0xbaef65(0x11c,'Z7EG')](_0x36c923['cJAUB']));console['log'](_0xbaef65(0x141,'fImu')+_0x39f705+'\x0a\x0a请复制链接在浏览器打开然后扫码即可'),await $[_0xbaef65(0x247,'rW4C')](0xbb8),await QR_code(_0x39f705);}else{_0x4a7567[_0xbaef65(0x1d6,'$bJS')](_0xbaef65(0x1e3,'(G^u'));return;}}else _0x36c923[_0xbaef65(0x26e,'8nyL')](_0xbaef65(0x155,'8nyL'),'Vmesy')?console[_0xbaef65(0x97,'92[W')]('\x0a【$获取二维码】:\x20获取失败'):_0x1a4b7b=_0x481ea5[_0xbaef65(0xed,'rW4C')]()?_0x4402b1[_0xbaef65(0x1b1,'F9dM')](_0x203aa8,_0x4402b1['dRVrr']):'';}}else _0x15abb0['push']({'num':_0x508fce+0x1,'acc_sign':_0x29a456[_0x1e606c][_0xbaef65(0xfd,'&JV@')]('&')[0x2],'appkey':_0x162fc9[_0x53b8df][_0xbaef65(0x285,'@wtu')]('&')[0x0],'utdId':_0x186c36[_0x808535][_0xbaef65(0x17d,'Rb3M')]('&')[0x1]});}catch(_0x4e7c82){}finally{_0x36c923[_0xbaef65(0x10d,'rW4C')](_0xbaef65(0x9a,'KYfG'),_0x36c923[_0xbaef65(0x162,'nKPk')])?_0xd475cf():(_0x6ca1b5[_0xbaef65(0x197,'KYfG')]('\x0a【'+_0x49e9b0+_0xbaef65(0x184,'MH(t')+_0x492e02[_0xbaef65(0x22b,'u$bE')]+'\x20红包状态】:\x20'+_0x2a72ca[_0xbaef65(0x104,'&JV@')]),_0x53cd10+='\x0a【'+_0x57f8d5+_0xbaef65(0x19d,'B8%#')+_0xed7a5e[_0xbaef65(0xb3,'9o9I')]+'\x20红包状态】:\x20'+_0x5cb864['msg']);};});});};function QR_code(_0x4cac0e){const _0x125443=_0x586565,_0x309012={'OLPGI':function(_0x464f5e){return _0x464f5e();},'kEhgB':function(_0x3a6c15,_0x4ed0d4){return _0x3a6c15!==_0x4ed0d4;},'htsfo':_0x125443(0x272,'@h#q'),'zNipM':function(_0x3a51dd,_0x3ec922){return _0x3a51dd===_0x3ec922;},'PQleD':_0x125443(0xba,'nKPk'),'wergZ':function(_0x22aced,_0x3ca27c){return _0x22aced>_0x3ca27c;},'Srzfv':'wx_errcode=','IMWLs':function(_0xd8477c,_0x15f068){return _0xd8477c(_0x15f068);},'irWBB':'wx_errcode=405','doNcR':'Vcagx','fWGlT':function(_0x3f27b0,_0x49f6d3){return _0x3f27b0+_0x49f6d3;},'AHnwf':function(_0x24969f,_0x43136e){return _0x24969f>_0x43136e;},'QKcGA':'wx_errcode=408','umfGw':function(_0x32251e,_0xe7313b){return _0x32251e(_0xe7313b);},'WhlXF':'stFuP','EbZhC':function(_0x34d3e7,_0xb9bda2){return _0x34d3e7===_0xb9bda2;},'IlSbc':_0x125443(0x1aa,'eb)w'),'LTPRu':_0x125443(0xb9,'^mBj')};let _0x278cca=new Date()[_0x125443(0x11b,'AT()')](),_0x2a88be={'url':'https://long.open.weixin.qq.com/connect/l/qrconnect?uuid='+_0x4cac0e+_0x125443(0x1cb,'SnT^')+_0x278cca,'headers':{'Host':'long.open.weixin.qq.com','user-agent':_0x309012['LTPRu'],'accept-encoding':_0x125443(0x1db,'5#7L')}};return new Promise((_0x3203c0,_0x1b5122)=>{const _0x105823=_0x125443;_0x309012[_0x105823(0x15a,'$bJS')](_0x309012[_0x105823(0x151,'8nyL')],_0x309012[_0x105823(0x9f,'L3L]')])?$['get'](_0x2a88be,async(_0xe98f61,_0x3ffd64,_0x3b6d8c)=>{const _0x4f6c18=_0x105823,_0x10f2a2={'PnXXs':function(_0x231485){return _0x309012['OLPGI'](_0x231485);}};if(_0x309012['kEhgB'](_0x309012[_0x4f6c18(0x1d3,'Z7EG')],_0x4f6c18(0x25b,'RhXC')))_0x3d752b[_0x4f6c18(0x8e,'KU%X')](_0x4f6c18(0x13f,'WCYV'));else try{if(_0xe98f61)_0x309012[_0x4f6c18(0xb2,'^mBj')](_0x309012['PQleD'],_0x4f6c18(0xd2,'5bMS'))?_0x2ae4ca[_0x25d29a]?_0x3dddf6[_0x27d1a2][_0x4f6c18(0xa8,'ItFk')](_0x4752f7):_0x3a9e4d[_0x43a54f]=[_0x32c17c]:console[_0x4f6c18(0xf4,'^[gQ')](_0x4f6c18(0x13f,'WCYV'));else{if(_0x309012[_0x4f6c18(0xbd,'8nyL')](_0x3b6d8c[_0x4f6c18(0x17e,'nKPk')](_0x309012['Srzfv']),-0x1)){if(_0x309012[_0x4f6c18(0x201,'rW4C')](_0x3b6d8c['indexOf'](_0x4f6c18(0x14f,'rW4C')),-0x1))await $[_0x4f6c18(0x145,'ItFk')](0xbb8),await _0x309012[_0x4f6c18(0x226,'MH(t')](QR_code,_0x4cac0e);else{if(_0x3b6d8c[_0x4f6c18(0x1cf,'rW4C')](_0x309012[_0x4f6c18(0x146,'5bMS')])>-0x1){if(_0x309012['kEhgB'](_0x4f6c18(0x15f,'Z7EG'),_0x309012[_0x4f6c18(0x190,'6RLm')]))throw new _0x32c140('\x0a找不到依赖\x20crypto-js\x20,请自行安装\x0a');else{let _0x21e8f=_0x3b6d8c[_0x4f6c18(0xa0,'RhXC')](_0x309012[_0x4f6c18(0x1de,'5#7L')](_0x3b6d8c[_0x4f6c18(0x1bf,'F9dM')](_0x4f6c18(0x19c,'&JV@')),0xb),_0x3b6d8c[_0x4f6c18(0x1b2,'Rb3M')])[_0x4f6c18(0x166,'KU%X')](0x0,0x20);await loginByWx(_0x21e8f);}}else _0x309012['AHnwf'](_0x3b6d8c[_0x4f6c18(0x199,'u$bE')](_0x309012['QKcGA']),-0x1)?(await $[_0x4f6c18(0x264,'7T5M')](0xbb8),await _0x309012[_0x4f6c18(0x94,'aN[L')](QR_code,_0x4cac0e)):console[_0x4f6c18(0x91,'fImu')](_0x4f6c18(0x1b6,'F9dM'));}}else console[_0x4f6c18(0x8e,'KU%X')](_0x4f6c18(0xd7,'nJBF'));}}catch(_0x3e1910){_0x309012[_0x4f6c18(0x116,'eb)w')](_0x309012[_0x4f6c18(0x200,'KYfG')],_0x309012[_0x4f6c18(0x231,'p*sX')])?_0x10f2a2[_0x4f6c18(0x282,'^mBj')](_0x37fb5d):console['log'](_0x3e1910,_0x3ffd64);}finally{_0x309012[_0x4f6c18(0x1f8,'N81e')](_0x3203c0);}}):_0x207c65['log'](_0x105823(0x229,'KYfG'));});}function encrypt(_0x25258a){const _0x1b04fd=_0x586565;let _0xead7bd=CryptoJs['AES'][_0x1b04fd(0xaf,'3Kif')](CryptoJs[_0x1b04fd(0x168,'u$bE')]['Utf8']['parse'](_0x25258a),CryptoJs[_0x1b04fd(0xb0,'6RLm')][_0x1b04fd(0xa3,'L3L]')]['parse']('ABfcG+IlhVTPAsV7eOdApQ=='),{'iv':CryptoJs[_0x1b04fd(0x17c,'5bMS')][_0x1b04fd(0x224,'@h#q')][_0x1b04fd(0x18c,'@CWD')](_0x1b04fd(0x159,'AT()')),'mode':CryptoJs[_0x1b04fd(0x121,'9o9I')][_0x1b04fd(0x112,'fImu')],'padding':CryptoJs[_0x1b04fd(0x236,'9o9I')]['Pkcs7']}),_0x4ab836=CryptoJs[_0x1b04fd(0x168,'u$bE')][_0x1b04fd(0x25d,'AT()')]['stringify'](_0xead7bd['ciphertext']);return _0x4ab836;}function _0x5be5(_0xc30fbd,_0x10126b){const _0xe79c25=_0xe79c;return _0x5be5=function(_0x5be5da,_0x32fff6){_0x5be5da=_0x5be5da-0x8b;let _0x455997=_0xe79c25[_0x5be5da];if(_0x5be5['KFmiUN']===undefined){var _0x578668=function(_0x5c8fa5){const _0x375376='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x566318='',_0x1d3be1='';for(let _0x17a412=0x0,_0x232f65,_0x32c140,_0x5ac496=0x0;_0x32c140=_0x5c8fa5['charAt'](_0x5ac496++);~_0x32c140&&(_0x232f65=_0x17a412%0x4?_0x232f65*0x40+_0x32c140:_0x32c140,_0x17a412++%0x4)?_0x566318+=String['fromCharCode'](0xff&_0x232f65>>(-0x2*_0x17a412&0x6)):0x0){_0x32c140=_0x375376['indexOf'](_0x32c140);}for(let _0x26d43e=0x0,_0x137025=_0x566318['length'];_0x26d43e<_0x137025;_0x26d43e++){_0x1d3be1+='%'+('00'+_0x566318['charCodeAt'](_0x26d43e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1d3be1);};const _0x296891=function(_0x1a4b7b,_0x481ea5){let _0x203aa8=[],_0x56895e=0x0,_0x335bcc,_0x39b627='';_0x1a4b7b=_0x578668(_0x1a4b7b);let _0x377fe9;for(_0x377fe9=0x0;_0x377fe9<0x100;_0x377fe9++){_0x203aa8[_0x377fe9]=_0x377fe9;}for(_0x377fe9=0x0;_0x377fe9<0x100;_0x377fe9++){_0x56895e=(_0x56895e+_0x203aa8[_0x377fe9]+_0x481ea5['charCodeAt'](_0x377fe9%_0x481ea5['length']))%0x100,_0x335bcc=_0x203aa8[_0x377fe9],_0x203aa8[_0x377fe9]=_0x203aa8[_0x56895e],_0x203aa8[_0x56895e]=_0x335bcc;}_0x377fe9=0x0,_0x56895e=0x0;for(let _0x177b5e=0x0;_0x177b5e<_0x1a4b7b['length'];_0x177b5e++){_0x377fe9=(_0x377fe9+0x1)%0x100,_0x56895e=(_0x56895e+_0x203aa8[_0x377fe9])%0x100,_0x335bcc=_0x203aa8[_0x377fe9],_0x203aa8[_0x377fe9]=_0x203aa8[_0x56895e],_0x203aa8[_0x56895e]=_0x335bcc,_0x39b627+=String['fromCharCode'](_0x1a4b7b['charCodeAt'](_0x177b5e)^_0x203aa8[(_0x203aa8[_0x377fe9]+_0x203aa8[_0x56895e])%0x100]);}return _0x39b627;};_0x5be5['tGnEoQ']=_0x296891,_0xc30fbd=arguments,_0x5be5['KFmiUN']=!![];}const _0x1b7f5a=_0xe79c25[0x0],_0x4668d3=_0x5be5da+_0x1b7f5a,_0x41df8f=_0xc30fbd[_0x4668d3];return!_0x41df8f?(_0x5be5['tSbiRG']===undefined&&(_0x5be5['tSbiRG']=!![]),_0x455997=_0x5be5['tGnEoQ'](_0x455997,_0x32fff6),_0xc30fbd[_0x4668d3]=_0x455997):_0x455997=_0x41df8f,_0x455997;},_0x5be5(_0xc30fbd,_0x10126b);};function yyz_getip(){const _0x3f4b3a=_0x586565,_0x524db1={'chmbk':function(_0x15b655,_0x4d2f80){return _0x15b655+_0x4d2f80;},'QVavq':function(_0x39339d,_0x4a4305){return _0x39339d<_0x4a4305;},'yZzsf':function(_0x3f43fa,_0xa5ede3){return _0x3f43fa+_0xa5ede3;},'ulJGD':function(_0x1590c3,_0x573c47){return _0x1590c3+_0x573c47;},'hCbwX':'crypto-js','pUMKQ':function(_0x402673,_0x48afc3){return _0x402673===_0x48afc3;},'XnpjO':_0x3f4b3a(0x24f,'5LgB'),'urXMM':_0x3f4b3a(0xf7,'^mBj'),'WBbQR':_0x3f4b3a(0x217,'L3L]'),'UmlDB':'nHGbK','aeDIO':function(_0x5dc829){return _0x5dc829();},'kTcrP':'https://www.bt.cn/Api/getIpAddress'};let _0x3dd627={'url':_0x524db1['kTcrP']};return new Promise((_0x42638a,_0x3a2d24)=>{const _0x5c186c=_0x3f4b3a,_0x15b7e7={'sirTx':function(_0x35eb03,_0x359425){return _0x35eb03*_0x359425;},'nOhAt':function(_0x5d0cf8,_0x50e9a2){const _0x326c17=_0x5be5;return _0x524db1[_0x326c17(0xb8,'ItFk')](_0x5d0cf8,_0x50e9a2);},'MMqvU':function(_0x3eeda0,_0x2b9481){const _0x33e433=_0x5be5;return _0x524db1[_0x33e433(0x1c2,'aeDz')](_0x3eeda0,_0x2b9481);},'bWJeS':function(_0x1dde3f,_0x5d291f){const _0x18381a=_0x5be5;return _0x524db1[_0x18381a(0x132,'5#7L')](_0x1dde3f,_0x5d291f);},'klOUq':function(_0xc2b921,_0x44ee1f){const _0x3775d6=_0x5be5;return _0x524db1[_0x3775d6(0xe1,'5bMS')](_0xc2b921,_0x44ee1f);},'cGkys':function(_0x45480d,_0x14a708){const _0x53780a=_0x5be5;return _0x524db1[_0x53780a(0x16d,'aN[L')](_0x45480d,_0x14a708);},'oiUgN':function(_0x4c5696,_0x41cb9d){return _0x524db1['ulJGD'](_0x4c5696,_0x41cb9d);},'IKdFs':_0x524db1['hCbwX'],'bvbia':function(_0x2737f4,_0x1c0581){const _0x56beea=_0x5be5;return _0x524db1[_0x56beea(0x1bc,'5bMS')](_0x2737f4,_0x1c0581);},'ilBXT':_0x524db1[_0x5c186c(0xdd,'B8%#')],'dkvtN':function(_0x12b825,_0xc0bcce){return _0x524db1['pUMKQ'](_0x12b825,_0xc0bcce);},'eerCO':_0x524db1['urXMM'],'ZHftA':_0x524db1[_0x5c186c(0x1ae,'$bJS')],'lifQR':'127.0.0.1','MFfLX':_0x524db1['UmlDB'],'MFDzG':_0x5c186c(0x13c,'^[gQ'),'bkOTw':'bzzWh','LmmbP':function(_0x5e14d6){return _0x524db1['aeDIO'](_0x5e14d6);}};$['get'](_0x3dd627,async(_0x1d19e4,_0x137886,_0xb99061)=>{const _0x42d61d=_0x5c186c,_0x2c6693={'fWbxb':_0x15b7e7[_0x42d61d(0x176,'U(bQ')]};if(_0x15b7e7[_0x42d61d(0x20d,'nJBF')](_0x15b7e7[_0x42d61d(0x280,'(G^u')],'XNpOd'))try{if(_0x15b7e7['dkvtN'](_0x15b7e7['eerCO'],_0x15b7e7[_0x42d61d(0x18f,'ItFk')]))_0x566318=_0x1d3be1[_0x42d61d(0xbb,'p*sX')]()?_0x17a412(_0x2c6693['fWbxb']):'';else{if(_0x1d19e4)IP_address=_0x15b7e7['lifQR'];else{if(_0x15b7e7['MFfLX']!==_0x42d61d(0x138,'(G^u'))IP_address=_0xb99061;else{var _0x88fcb2=new _0x4d8def(_0x15b7e7[_0x42d61d(0x17a,'eb)w')](_0x2e1b08,0x3e8)),_0x439bba=_0x15b7e7[_0x42d61d(0x143,'@CWD')](_0x88fcb2['getFullYear'](),'-'),_0x29d45b=_0x15b7e7[_0x42d61d(0x211,'7T5M')](_0x15b7e7[_0x42d61d(0x23a,'AT()')](_0x15b7e7[_0x42d61d(0xcd,'U(bQ')](_0x88fcb2['getMonth'](),0x1),0xa)?_0x15b7e7[_0x42d61d(0xaa,'B8%#')]('0',_0x88fcb2[_0x42d61d(0x1e9,'y&9Q')]()+0x1):_0x88fcb2[_0x42d61d(0x158,'WCYV')]()+0x1,'-'),_0x3477d2=_0x88fcb2[_0x42d61d(0x22f,'WCYV')]()+'\x20',_0xeb6bc3=_0x88fcb2[_0x42d61d(0x21c,'N81e')]()+':',_0xdb32f9=(_0x15b7e7[_0x42d61d(0xa6,'@CWD')](_0x88fcb2[_0x42d61d(0x1f3,'&$jW')](),0xa)?'0'+_0x88fcb2[_0x42d61d(0x9d,'N81e')]():_0x88fcb2['getMinutes']())+':',_0x328ba7=_0x88fcb2[_0x42d61d(0xfa,'ItFk')]();let _0x159921=_0x15b7e7['cGkys'](_0x15b7e7[_0x42d61d(0x283,'L3L]')](_0x15b7e7[_0x42d61d(0x254,'92[W')](_0x15b7e7[_0x42d61d(0x8d,'KYfG')](_0x15b7e7[_0x42d61d(0x256,'KYfG')](_0x439bba,_0x29d45b),_0x3477d2),_0xeb6bc3),_0xdb32f9),_0x328ba7);return _0x15b7e7[_0x42d61d(0x255,'L3L]')](_0x15b7e7[_0x42d61d(0x109,'fImu')](_0x15b7e7['oiUgN'](_0x439bba,_0x29d45b),_0x3477d2),_0xeb6bc3)+_0xdb32f9+_0x328ba7;}}}}catch(_0x4c4b2e){if(_0x15b7e7[_0x42d61d(0x150,'SnT^')](_0x15b7e7[_0x42d61d(0x12b,'5bMS')],'muqbY'))IP_address=_0x15b7e7['lifQR'];else throw new _0x2c8197(_0x42d61d(0x179,'oLaZ'));}finally{_0x15b7e7[_0x42d61d(0x1b4,'$bJS')](_0x15b7e7[_0x42d61d(0x1ce,'5LgB')],_0x42d61d(0x1f7,'RhXC'))?_0x20d3eb=_0x1a4a36[_0x42d61d(0x221,'5LgB')](/作者TG_ID:(\S*)/)[0x1][_0x42d61d(0x1a7,'WCYV')](/_/g,'><'):_0x15b7e7[_0x42d61d(0x261,'u$bE')](_0x42638a);}else _0x53a022[_0x42d61d(0x21e,'Rb3M')](_0x42d61d(0xe6,'WCYV'));});});}function Format_time(_0x1d9a42){const _0x1c1a5d=_0x586565,_0x12cc2f={'DwmQT':function(_0x1feb6e,_0x4b9293){return _0x1feb6e*_0x4b9293;},'InyVr':function(_0xa57f4b,_0x49811d){return _0xa57f4b+_0x49811d;},'BPMaT':function(_0x3d31a8,_0x1f3350){return _0x3d31a8+_0x1f3350;},'JLWEh':function(_0x129072,_0x2ebf44){return _0x129072<_0x2ebf44;},'mQoap':function(_0x2ac6ea,_0x5a9672){return _0x2ac6ea+_0x5a9672;},'Rlxoc':function(_0x33c5af,_0x4c1ca2){return _0x33c5af+_0x4c1ca2;},'fQfNZ':function(_0x475193,_0x297f94){return _0x475193+_0x297f94;},'HzlBN':function(_0x5e18e6,_0x38197c){return _0x5e18e6+_0x38197c;},'OqPwV':function(_0x53d350,_0x546bf5){return _0x53d350+_0x546bf5;}};var _0xe09444=new Date(_0x12cc2f[_0x1c1a5d(0x1ad,'nJBF')](_0x1d9a42,0x3e8)),_0x27cecc=_0x12cc2f[_0x1c1a5d(0x14d,'Cpao')](_0xe09444['getFullYear'](),'-'),_0x400cea=_0x12cc2f[_0x1c1a5d(0x198,'@CWD')](_0x12cc2f['JLWEh'](_0x12cc2f[_0x1c1a5d(0x258,'7T5M')](_0xe09444[_0x1c1a5d(0x1c6,'$bJS')](),0x1),0xa)?_0x12cc2f[_0x1c1a5d(0x1dd,'@h#q')]('0',_0x12cc2f[_0x1c1a5d(0x198,'@CWD')](_0xe09444[_0x1c1a5d(0xf5,'@CWD')](),0x1)):_0xe09444[_0x1c1a5d(0x118,'u$bE')]()+0x1,'-'),_0x26f6c1=_0x12cc2f['Rlxoc'](_0xe09444[_0x1c1a5d(0x165,'92[W')](),'\x20'),_0xed784=_0x12cc2f[_0x1c1a5d(0x140,'@wtu')](_0xe09444['getHours'](),':'),_0x3ccabe=(_0x12cc2f['JLWEh'](_0xe09444['getMinutes'](),0xa)?'0'+_0xe09444[_0x1c1a5d(0x1f2,'KU%X')]():_0xe09444[_0x1c1a5d(0xe0,'rW4C')]())+':',_0x93c813=_0xe09444[_0x1c1a5d(0x1a0,'5bMS')]();let _0xad5cbb=_0x12cc2f['Rlxoc'](_0x12cc2f[_0x1c1a5d(0x12c,'U(bQ')](_0x12cc2f[_0x1c1a5d(0xec,'5#7L')](_0x12cc2f[_0x1c1a5d(0x1f9,'@wtu')](_0x12cc2f['HzlBN'](_0x27cecc,_0x400cea),_0x26f6c1),_0xed784),_0x3ccabe),_0x93c813);return _0x12cc2f[_0x1c1a5d(0x122,'RhXC')](_0x12cc2f[_0x1c1a5d(0x27b,'@wtu')](_0x12cc2f[_0x1c1a5d(0x100,'fImu')](_0x12cc2f[_0x1c1a5d(0x24c,'B8%#')](_0x27cecc+_0x400cea,_0x26f6c1),_0xed784),_0x3ccabe),_0x93c813);}var version_ = 'jsjiami.com.v7';


function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
