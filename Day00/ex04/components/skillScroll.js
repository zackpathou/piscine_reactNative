import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Skill from "./skill";
import ListSkills from "./skills";


function ListSkillscroll() {
    return (
        
            <ScrollView style={styles.scroll} horizontal={true}>

                <Skill nameSkill="javascripts" imageSkill={require('./../assets/js.jpg')} />
                <Skill nameSkill="React" imageSkill={require('./../assets/react.png')} />
                <Skill nameSkill="Figma" imageSkill={require('./../assets/figma.png')} /> 

            </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    scroll:{
        flex:1,
        // maxHeight:100
    },
})
export default ListSkillscroll;